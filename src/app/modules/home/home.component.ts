import { Component, OnDestroy, OnInit } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard"
import { MatDialog } from "@angular/material/dialog";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { environment } from "src/environments/environment";
import { VideoPlayerDialogData } from "../shared/components/video-player-dialog/video-player-dialog-data";
import { VideoPlayerDialogComponent } from "../shared/components/video-player-dialog/video-player-dialog.component";
import { AnalyticsService } from "../analytics/analytics.service";
import { ServerStatus } from "../analytics/models/serverStatus";
import { interval, Observable, Subscription } from "rxjs";
import { UserCookieService } from "../shared/services/userCookie.service";

@Component({
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  public faWindows = faWindows;
  public realmList: string = "login.lookingforraid.co.uk"
  public serverStatus: ServerStatus  = {
    online: true,
    onlinePlayers: 0,
    uptime: "0d 0h"
  };
  public isLoggedIn: boolean = false;

  private serverStatusSubscription: Subscription | undefined;

  constructor(private _dialog: MatDialog, private _clipBoard: Clipboard, private _analyticsService: AnalyticsService, private _userCookieService: UserCookieService) {
    _userCookieService.isLoggedIn.subscribe(event => {
      this.isLoggedIn = event ?? false;
    });
   }

  ngOnDestroy(): void {
    this.serverStatusSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._analyticsService.getServerStatus().subscribe(response => {
      this.serverStatus = response;
    });

    this.serverStatusSubscription = interval(10000).subscribe(o => {
      this._analyticsService.getServerStatus().subscribe(response => {
        this.serverStatus = response;
      })
    });

  }

  public openDiscordUrl(): void {
    window.open(environment.discordJoinUrl, "_blank");
  }

  public downloadClient(): void {
    window.open(environment.clientDownloadUrl, "_blank");
  }

  public copyRealmList():void {
    this._clipBoard.copy("login.lookingforraid.co.uk");
    this.realmList = "Copied!";
    setTimeout(() => {
      this.realmList = "login.lookingforraid.co.uk";
    }, 1000)
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  public playVideo(videoId: string, videoName: string): void {
    let VideoPlayerDialogData: VideoPlayerDialogData = {
      videoId: videoId,
      videoName: videoName
    };

    const dialogRef = this._dialog
      .open(VideoPlayerDialogComponent, {
        data: VideoPlayerDialogData,
      });
  }
}
