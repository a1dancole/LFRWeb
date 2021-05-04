import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-naxxramas.component.scss'],
  templateUrl: './wiki-naxxramas.component.html',
})
export class WikiNaxxramasComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
