import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {environment} from "../environments/environment.prod";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('eccUi/Module').then(m => {
      return m.AppModule
    })
  },
];

  @NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: environment.enableTracing,
      // onSameUrlNavigation: 'reload'
      relativeLinkResolution: 'legacy',
    }),
    CommonModule
  ]
})
export class AppRoutingModule { }
