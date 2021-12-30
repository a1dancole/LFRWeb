import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoPlayerDialogData } from './video-player-dialog-data';

@Component({
  selector: 'video-player-dialog',
  templateUrl: 'video-player-dialog.component.html',
})
export class VideoPlayerDialogComponent implements OnInit {

  public videoHeight:number = window.screen.height * 0.5;
  public videoWidth:number = window.screen.width * 0.72;

  private _apiLoaded: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA)public data: VideoPlayerDialogData, private _dialogRef: MatDialogRef<VideoPlayerDialogComponent>) {
  }

  ngOnInit() {
    if(!this._apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this._apiLoaded = true;
    }
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
