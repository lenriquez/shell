import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkedCollection } from '../dtos/LinkedCollection';
import { Setting } from '../dtos/Setting';
import { ApiUrls } from '../shared/constants/api-urls.model';
import { UserSettingResourceParameters } from './query-parameters/user-setting-resource-parameters';
import { ServiceBase } from './service-base';

@Injectable()
export class UserSettingService extends ServiceBase<Setting> {
  constructor(http: HttpClient) {
    super(http, ApiUrls.UserSettingUrl);
  }

  getUserSettings(
    parameters: UserSettingResourceParameters
  ): Observable<LinkedCollection<Setting>> {
    const url = `${this.baseUrl}`;
    const body = this.getBody(parameters);
    return this.http.post<LinkedCollection<Setting>>(
      ApiUrls.UserSettingUrl,
      body
    );
  }
}
