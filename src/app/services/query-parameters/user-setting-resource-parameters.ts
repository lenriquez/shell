import { ResourceParameterBase } from './resource-parameters-base';

export interface UserSettingResourceParameters extends ResourceParameterBase {
  key?: string;
  applicationUserId?: string;
}
