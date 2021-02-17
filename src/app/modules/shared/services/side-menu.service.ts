import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class SideMenuService {
  public toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _toggled: boolean = false;

  public toggleSideMenu(): void {
    this._toggled = !this._toggled;
    this.toggled.emit(this._toggled);
  }
}
