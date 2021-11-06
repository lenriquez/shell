// This is a generated file, any changes made will be overwritten
import { SupportsIndicator } from "./SupportsIndicator";
import { Role } from './Role';
import { Link } from './Link';

export interface ApplicationUser  extends SupportsIndicator {
  id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  title?: string;
  userFullName?: string;
  email?: string;
  userName?: string;
  initials?: string;
  phoneNumber?: string;
  cellPhoneNumber?: string;
  status?: string;
  disabled?: boolean;
  lockedOut?: boolean;
  roleNames?: string;
  roles?: Role[];
  emrIds?: string;
  links?: Link[];
}
