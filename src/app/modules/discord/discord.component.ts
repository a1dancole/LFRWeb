import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { SettingsService } from "../shared/services/settings.service";

@Component({
  styleUrls: ['./discord.component.scss'],
  templateUrl: './discord.component.html',
})
export class DiscordComponent implements OnInit {
  public discordUrl: SafeResourceUrl = {};
  public discordJoinUrl: string = '';

  constructor(private _domSanitizer: DomSanitizer, private _settingsService: SettingsService) { }

  ngOnInit(): void {
    this.discordUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(`https://e.widgetbot.io/channels/${this._settingsService.settings.discordServerId}/${this._settingsService.settings.discordDefaultChannelId}`);
    this.discordJoinUrl = this._settingsService.settings.discordJoinUrl;
  }
}
