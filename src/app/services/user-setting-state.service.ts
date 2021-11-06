import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LinkedCollection } from '../dtos/LinkedCollection';
import { Setting } from '../dtos/Setting';
import { SettingForAdd } from '../dtos/SettingForAdd';
import { StateService } from '../shared/models/state-service.model';
import {UserSettingResourceParameters} from "./query-parameters/user-setting-resource-parameters";
import {UserSettingService} from "./user-setting.service";

@Injectable()
export class UserSettingStateService implements StateService {
  public userSettings$: BehaviorSubject<LinkedCollection<Setting> | null>;

  constructor(private userSettingService: UserSettingService) {
    this.userSettings$ = new BehaviorSubject<LinkedCollection<Setting> | null>(null);
  }

  clearState() {
    this.userSettings$.next(null);
  }

  public getUserSettings(parameters: UserSettingResourceParameters) {
    this.userSettingService.get(parameters).subscribe((results) => {
      this.userSettings$.next(results);
    });
  }

  public getSettingValue(key: string): string | null {
    const setting = this.userSettings$.value?.value.find((s) => {
      return s.key === key;
    });
    return !!setting ? setting.value : null;
  }

  public getSetting(key: string): Setting | null {
    if (!this.userSettings$.value) {
      return null;
    }
    return this.userSettings$.value.value.find((s) => {
      return s.key === key;
    }) || null;
  }

  public addUserSetting(setting: SettingForAdd) {
    this.userSettingService.post(setting).subscribe((result) => {
      this.userSettings$.value?.value.push(result);
      this.userSettings$.next(this.userSettings$.value);
    });
  }
}
