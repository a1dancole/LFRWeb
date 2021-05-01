import { Component } from "@angular/core";
import { SettingsService } from "../shared/services/settings.service";

@Component({
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private _settingsService: SettingsService) { }

  public openDiscordUrl(): void {
    window.open(this._settingsService.settings.discordJoinUrl, "_blank");
  }

  public downloadClient(): void {
    window.open(this._settingsService.settings.clientDownloadUrl, "_blank");
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
