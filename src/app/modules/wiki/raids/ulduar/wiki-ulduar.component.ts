import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-ulduar.component.scss'],
  templateUrl: './wiki-ulduar.component.html',
})
export class WikiUlduarComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
