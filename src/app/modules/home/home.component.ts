import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public openDiscordUrl(): void {
    window.open(environment.discordJoinUrl, "_blank");
  }

  public downloadClient(): void {
    window.open(environment.clientDownloadUrl, "_blank");
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
