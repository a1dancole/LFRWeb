import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-eye-of-eternity.component.scss'],
  templateUrl: './wiki-eye-of-eternity.component.html',
})
export class WikiEyeOfEternityComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
