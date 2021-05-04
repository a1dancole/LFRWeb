import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-raids.component.scss'],
  templateUrl: './wiki-raids.component.html',
})
export class WikiRaidsComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
