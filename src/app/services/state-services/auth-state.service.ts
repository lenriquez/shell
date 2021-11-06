import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize, first } from 'rxjs/operators';
import { AccountService } from "../account.service";
import { ApplicationUser } from "../../dtos/ApplicationUser";
import { Customer } from '../../dtos/Customer';
import { Login } from '../../dtos/Login';
import { LoginSuccess } from '../../dtos/LoginSuccess';
import { UserSettingStateService } from "../user-setting-state.service";
import { StateService } from "../../shared/models/state-service.model";


@Injectable()
export class AuthStateService implements StateService {
  public error$ = new BehaviorSubject<string[] | null>(null);
  public loading$ = new BehaviorSubject<boolean>(false);
  public requireCaptcha$ = new BehaviorSubject<boolean>(false);
  public captchaSiteKey$ = new BehaviorSubject<string | null>(null);
  public userLoggedIn$ = new BehaviorSubject<boolean>(false);
  public loaded$ = new BehaviorSubject<boolean>(false);
  // Login Success
  public applicationUser$ = new BehaviorSubject<ApplicationUser | null>(null);
  public customer$ = new BehaviorSubject<Customer | null>(null);

  public authenticated$ = new BehaviorSubject<boolean>(false);
  public initialAuthChecked$ = new BehaviorSubject<boolean>(false);
  public loggingSuccess$ = new BehaviorSubject<LoginSuccess | null>(null);

  constructor(
    private accountService: AccountService,
    private userSettingStateService: UserSettingStateService
  ) {}

  login(value: Login) {
    this.loading$.next(true);
    this.accountService
      .login(value)
      .pipe(
        first(),
        finalize(() => {
          this.loading$.next(false);
          this.loaded$.next(true);
        })
      )
      .subscribe(
        (resp: LoginSuccess) => {
          this.error$.next(null);
          this.customer$.next(resp.customer);
          this.userSettingStateService.userSettings$.next(resp.userSettings);
          this.applicationUser$.next(resp.applicationUser);
          this.authenticated$.next(true);
          this.loggingSuccess$.next(resp);
        },
        (error) => {
          let requireCaptcha: boolean = false;
          let captchaSiteKey: string = '';
          if (error.requireCaptcha && error.requireCaptcha.length > 0) {
            requireCaptcha = error.requireCaptcha[0] === 'true';
          }

          if (error.captchaSiteKey && error.captchaSiteKey.length > 0) {
            captchaSiteKey = error.captchaSiteKey[0];
          }

          this.error$.next(error.login_failure);
          this.requireCaptcha$.next(requireCaptcha);
          this.captchaSiteKey$.next(captchaSiteKey);
        }
      );
  }

  logout() {
    this.accountService.logout().pipe(first()).subscribe(() => {
      this.authenticated$.next(false);
      this.applicationUser$.next(null);
      this.initialAuthChecked$.next(false);
    });
  }

  validateLoginAction() {
    this.accountService.validateLogin().pipe(first()).subscribe(
      (e) => {
        this.initialAuthChecked$.next(true);
        this.customer$.next(e.customer);
        this.applicationUser$.next(e.applicationUser);
        this.userSettingStateService.userSettings$.next(e.userSettings);
        this.authenticated$.next(true);
        this.loggingSuccess$.next(e);
      },
      () => {
        this.initialAuthChecked$.next(true);
      }
    );
  }

  setNotAuthentication() {
    this.authenticated$.next(false);
  }

  clearState() {
    this.loading$.next(false);
    this.requireCaptcha$.next(false);
    this.captchaSiteKey$.next('');
    this.userLoggedIn$.next(false);
    this.loaded$.next(false);
    // Login Success
    this.applicationUser$.next(null);
    this.customer$.next(null);
    this.userSettingStateService.clearState();

    this.authenticated$.next(false);
    this.initialAuthChecked$.next(false);
    this.loggingSuccess$.next(null);
  }
}

