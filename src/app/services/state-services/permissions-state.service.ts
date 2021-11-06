import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Link } from '../../dtos/Link';
import { PolicyGroup } from '../../dtos/PolicyGroup';
import { ServerLinkHelper } from "../server-link-helper";
import { UserManagementService } from "../user-management.service";

@Injectable()
export class PermissionsStateService {
  public getSectionsPermission$ = new BehaviorSubject<Link[]>([]);
  public entityClaim$ = new BehaviorSubject<PolicyGroup[]>([]);
  public claimList$ = new BehaviorSubject<PolicyGroup[]>([]);

  constructor(
    private userManagementService: UserManagementService,
    private serverLinkHelper: ServerLinkHelper
  ) { }

  getSectionsPermissions() {
    this.userManagementService.getSectionsPermission().subscribe((e: Link[]) => {
      this.getSectionsPermission$.next(e);
    });
  }

  addEntityClaim(payload: { link: Link; updateParams: any }) {
    this.serverLinkHelper
      .callFromLink(payload.link, payload.updateParams)
      .subscribe(e => {});
  }

  clearEntityPermissions() {
    this.entityClaim$.next([]);
  }

  getClaimsList() {
    this.userManagementService.getClaims().subscribe((e:PolicyGroup[]) => {
      this.claimList$.next(e);
    });
  }

  getEntityClaimsList(link: Link) {
    this.serverLinkHelper
      .callFromLink<PolicyGroup[]>(link)
      .subscribe(results => {
        this.entityClaim$.next(results);
      });
  }

  removeEntityClaim(link: Link) {
    this.serverLinkHelper
      .callFromLink(link)
      .subscribe( e => {} );
  }
}
