import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NotificationIconService } from "./services/notification-icon.service";
import { PatientSearchService } from "./services/patient-search.service";
import { HttpClientModule } from "@angular/common/http";
import { PermissionsStateService } from "./services/state-services/permissions-state.service";
import {UserManagementService} from "./services/user-management.service";
import {ServerLinkHelper} from "./services/server-link-helper";
import {AuthStateService} from "./services/state-services/auth-state.service";
import {AccountService} from "./services/account.service";
import {UserSettingStateService} from "./services/user-setting-state.service";
import {UserSettingService} from "./services/user-setting.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
    AutoCompleteModule,
    NgbModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [
    NotificationIconService,
    PatientSearchService,
    PermissionsStateService,
    UserManagementService,
    ServerLinkHelper,
    AuthStateService,
    AccountService,
    UserSettingStateService,
    UserSettingService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

}
