import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuService } from './side-menu.service';

const routes: Routes = [];

@NgModule({
  providers: [SideMenuService],
  exports: []
})
export class ServicesModule { }
