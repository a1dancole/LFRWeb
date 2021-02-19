import { Component, OnInit } from "@angular/core";

declare let Twitch: any;

@Component({
  styleUrls: ['./stream.component.scss'],
  templateUrl: './stream.component.html',
})
export class StreamComponent implements OnInit {
  public potterStreamEnded: boolean = true;

  constructor(){ }

  ngOnInit(): void {
    let options = {
      channel: "lfr_potter",
      width: "100%",
      height: "100%",
      muted: true,
      autoplay: true
    };
    let potterStream = new Twitch.Player("potterTwitch", options);
    this.potterStreamEnded =  potterStream.getEnded();
  }
}
