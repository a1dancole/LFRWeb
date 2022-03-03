import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanonicalRouteService } from './canonicalRoute.services';
import { SideMenuService } from './side-menu.service';

const routes: Routes = [];

@NgModule({
  providers: [SideMenuService, CanonicalRouteService],
  exports: []
})
export class ServicesModule { }
