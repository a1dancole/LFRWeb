import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-general.component.scss'],
  templateUrl: './wiki-general.component.html',
})
export class WikiGeneralComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
