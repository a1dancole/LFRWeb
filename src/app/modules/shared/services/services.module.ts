import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuService } from './side-menu.service';
import { SRP6Service } from './authentication/srp6.service';

const routes: Routes = [];

@NgModule({
  providers: [SideMenuService, SRP6Service],
  exports: []
})
export class ServicesModule { }
