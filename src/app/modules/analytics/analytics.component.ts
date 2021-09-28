import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./analytics.component.scss'],
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
