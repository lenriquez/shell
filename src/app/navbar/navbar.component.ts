import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/';
import { filter } from 'rxjs/operators';
import { LinkedCollection } from "../dtos/LinkedCollection";
import { Patient } from '../dtos/Patient';
import { PatientSearchService } from "../services/patient-search.service";
import { AuthStateService } from "../services/state-services/auth-state.service";
import { PermissionsStateService } from "../services/state-services/permissions-state.service";
import { NotificationIconService } from "../services/notification-icon.service";

enum MENU_OPTIONS {
  USERS = 'get_application_users',
  ROLES = 'get_application_roles',
  CARRIERS = 'get_insurance_carriers',
  BCODES = 'get_tracked_billing_codes',
  POPERIODS = 'get_postop_periods',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild(NgbDropdown)
  private dropdown: NgbDropdown | undefined;

  menu: typeof MENU_OPTIONS = MENU_OPTIONS;

  public userLoggedIn: Observable<boolean>;
  public permission: Observable<any>;
  customerName: string = '';
  usersName: string = '';
  isNavbarCollapsed = true;
  notificationsIcon$: Observable<boolean>;

  searchResults: LinkedCollection<Patient> = { value: [], links: [] };
  menuPermission: any = {};
  public patientListLoading = false;

  hideLoader = true;

  constructor(
    private router: Router,
    private notificationIconService: NotificationIconService,
    private patientSearchService: PatientSearchService,
    private permissionsStateService: PermissionsStateService,
    private authStateService: AuthStateService
  ) {
    this.userLoggedIn = this.authStateService.authenticated$.asObservable();
    this.permission = this.permissionsStateService.getSectionsPermission$.asObservable();
    this.notificationsIcon$ = this.notificationIconService.getObservable();

    this.userLoggedIn.subscribe((e: boolean) => {
      if (e) {
        this.permissionsStateService.getSectionsPermissions();
      }
    });

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd) || !this.dropdown) {
        return;
      }

      this.dropdown.close();
    });

    this.authStateService.applicationUser$.asObservable().pipe(
      filter((result) => !!result)
    ).subscribe((result) => {
      this.usersName = `${result?.lastName}, ${result?.firstName}`;
    });

    this.authStateService.customer$.asObservable().pipe(
      filter((result) => !!result)
    ).subscribe((result) => {
      this.customerName = result?.name || '';
    });

    this.mapPermissions();
  }

  mapPermissions() {
    this.permission.pipe(filter((e) => !!e)).subscribe((e) => {
      this.menuPermission = {};
      e.forEach((link: { rel: string | number; }) => {
        if (link) {
          this.menuPermission[link.rel] = true;
        }
      });
    });
  }

  handleFilter(searchParameter: string) {
    this.patientSearchService
      .patientQuickSearch(searchParameter)
      .pipe(filter(result => !!result))
      .subscribe((result: LinkedCollection<Patient>) => {
        this.searchResults = result;
        this.hideLoader = true;
      });
  }

  onKeyPress(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      this.hideLoader = false;
      this.handleFilter((<HTMLInputElement>e.target).value);
    } else {
      this.hideLoader = true;
    }
  }

  logout() {
    this.authStateService.logout();
  }

  patientSelected(patient: Patient) {
    this.router.navigate(['/flowsheet', patient.id]);
    setTimeout(() => {
      location.reload();
    }, 100);
  }
}
