import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'side-menu',
  styleUrls: ['./side-menu.component.scss'],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private _sideMenuService: SideMenuService) { }

  ngOnInit(): void {
    this._sideMenuService.toggled.subscribe(toggle => this.toggleDrawer(toggle))
  }

  public toggleDrawer(toggle: boolean) : void {
    this.drawer.toggle(toggle);
  }

  ngOnDestroy(): void {
    if(this._sideMenuService) {
      this._sideMenuService.toggled.unsubscribe();
    }
  }
}
