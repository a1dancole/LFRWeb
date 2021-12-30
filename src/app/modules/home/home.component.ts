import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { environment } from "src/environments/environment";
import { VideoPlayerDialogData } from "../shared/components/video-player-dialog/video-player-dialog-data";
import { VideoPlayerDialogComponent } from "../shared/components/video-player-dialog/video-player-dialog.component";

@Component({
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private _dialog: MatDialog) { }

  public openDiscordUrl(): void {
    window.open(environment.discordJoinUrl, "_blank");
  }

  public downloadClient(): void {
    window.open(environment.clientDownloadUrl, "_blank");
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
