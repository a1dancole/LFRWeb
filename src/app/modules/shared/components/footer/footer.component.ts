import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SideMenuService } from "../../services/side-menu.service";
import { UserCookieService } from "../../services/userCookie.service";
import {  faDiscord, faTrello, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { environment } from "src/environments/environment";

@Component({
  selector: 'footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public isLoggedIn: boolean = false;
  public sideMenuOpen: boolean = false;

  public faDiscord: IconDefinition = faDiscord;
  public faYoutube: IconDefinition = faYoutube;
  public faTrello: IconDefinition = faTrello;

  constructor() {

  }
  public openDiscordUrl(): void {
    window.open(environment.discordJoinUrl, "_blank");
  }

  public openTrelloUrl(): void {
    window.open("https://trello.com/b/X7CLHLQQ/backlog", "_blank");
  }

  public openYoutubeUrl(): void {
    window.open("https://www.youtube.com/channel/UCOaJC3M74tpjCF7hq-YV-bQ", "_blank");
  }


  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  public isPwa(): boolean {
    return (window.matchMedia('(display-mode: standalone)').matches) || ((window.navigator as any).standalone) || document.referrer.includes('android-app://');
}
}
