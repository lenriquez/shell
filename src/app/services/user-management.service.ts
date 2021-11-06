import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { ApplicationUser } from '../dtos/ApplicationUser';
import { ApplicationUserForUpdate } from '../dtos/ApplicationUserForUpdate';
import { FieldGroup } from '../dtos/FieldGroup';
import { ForgotPassword } from '../dtos/ForgotPassword';
import { LinkedCollection } from '../dtos/LinkedCollection';
import { Link } from '../dtos/Links';
import { PolicyGroup } from '../dtos/PolicyGroup';
import { ResetPassword } from '../dtos/ResetPassword';
import { Role } from '../dtos/Role';
import {ServerLinkHelper} from "./server-link-helper";
import { userListColumns } from "../shared/models/user-list.columns";
import { roleListColumns } from "../shared/models/role-list.columns";
import { editUserFields } from "../shared/models/edit-user.fields";
import { editRoleFields } from "../shared/models/edit-role.fields";
import { resetPasswordFields } from "../shared/models/reset-password.fields";

@Injectable()
export class UserManagementService {
  applicationUserUrl: string = 'applicationusers';
  accountUrl: string = 'accounts';
  claimsUrl: string = 'claims';
  rolesUrl: string = 'role';
  homeUrl: string = 'home';

  userListGridColumns = userListColumns;
  roleListGridColumns = roleListColumns;
  editUserFormFields = editUserFields;
  editRoleFormFields = editRoleFields;
  resetPasswordFormFields = resetPasswordFields;

  constructor(
    private http: HttpClient,
    private serverLinkHelper: ServerLinkHelper
  ) {}

  getUsersForCustomer(
    customerId: string
  ): Observable<LinkedCollection<ApplicationUser>> {
    return this.http.get<LinkedCollection<ApplicationUser>>(
      `${this.applicationUserUrl}?customerId=${customerId}`
    );
  }

  getRoles(): Observable<LinkedCollection<Role>> {
    return this.http.get<LinkedCollection<Role>>(`${this.rolesUrl}`);
  }

  getSectionsPermission(): Observable<Link[]>  {
    return this.http.get<Link[]>(this.homeUrl);
  }

  getApplicationUser(userId: string): Observable<ApplicationUser> {
    return this.http.get<ApplicationUser>(
      `${this.applicationUserUrl}/${userId}`
    );
  }

  getRole(roleId: string): Observable<Role> {
    return this.http.get<Role>(`${this.rolesUrl}/${roleId}`);
  }

  getUserListColumns(): Observable<FieldGroup[]> {
    return of(this.userListGridColumns);
  }

  getRoleListColumns(): Observable<FieldGroup[]> {
    return of(this.roleListGridColumns);
  }

  getEditUserFields(): Observable<FieldGroup[]> {
    return of(this.editUserFormFields);
  }

  getEditRoleFields(): Observable<FieldGroup[]> {
    return of(this.editRoleFormFields);
  }

  getResetPasswordFields(): Observable<FieldGroup[]> {
    return of(this.resetPasswordFormFields);
  }

  updateUser(updatedUser: ApplicationUserForUpdate): Observable<any> {
    const updateUrlLink = this.serverLinkHelper.getLinkForMethod(
      updatedUser,
      'PUT'
    );
    const url = this.serverLinkHelper.handleLink(updateUrlLink);
    return this.http.put(url, updatedUser);
  }

  forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    return this.http.post(`${this.accountUrl}/forgotPassword`, forgotPassword);
  }

  resetPassword(resetPassword: ResetPassword): Observable<any> {
    return this.http.post(`${this.accountUrl}/resetPassword`, resetPassword);
  }

  getClaims(): Observable<PolicyGroup[]> {
    return this.http.get<PolicyGroup[]>(`${this.claimsUrl}`);
  }

  getUsersClaims(getUrl: Link): Observable<PolicyGroup[]> {
    const url = this.serverLinkHelper.handleLink(getUrl.href);
    return this.http.get<PolicyGroup[]>(url);
  }

  removeUsersClaims(removeUrl: Link, userId: string): Observable<any> {
    const url = this.serverLinkHelper.handleLink(removeUrl.href);
    return this.http.delete(`${url}&userId=${userId}`);
  }

  addUserClaim(addUrl: Link, userId: string): Observable<any> {
    const url = this.serverLinkHelper.handleLink(addUrl.href);
    return this.http.post(url, { userId: userId });
  }

  accountActionFromUrl(unlockUrl: string): Observable<any> {
    const url = this.serverLinkHelper.handleLink(unlockUrl);
    return this.http.post(url, {});
  }
}
