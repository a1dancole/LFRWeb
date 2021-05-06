import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { environment } from "src/environments/environment";

@Component({
  styleUrls: ['./discord.component.scss'],
  templateUrl: './discord.component.html',
})
export class DiscordComponent implements OnInit {
  public discordUrl: SafeResourceUrl = {};
  public discordJoinUrl: string = '';

  constructor(private _domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.discordUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(`https://e.widgetbot.io/channels/${environment.discordServerId}/${environment.discordDefaultChannelId}`);
    this.discordJoinUrl = environment.discordJoinUrl;
  }
}
