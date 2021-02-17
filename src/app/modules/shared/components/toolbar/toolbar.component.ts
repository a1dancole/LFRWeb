import { Component } from "@angular/core";
import { SideMenuService } from "../../services/side-menu.service";

@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  constructor(private _sideMenuService: SideMenuService) {

  }

  public toggleSideMenu(): void {
    this._sideMenuService.toggleSideMenu();
  }
}
