import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { SettingsService } from "../shared/services/settings.service";

@Component({
  styleUrls: ['./serverstatus.component.scss'],
  templateUrl: './serverstatus.component.html',
})
export class ServerStatusComponent implements OnInit {
  public dashboardUrl!: SafeResourceUrl;
  constructor(private _settingsService: SettingsService, private _domSanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
    this.dashboardUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(this._settingsService.settings?.dashboardUrl)
  }
}
