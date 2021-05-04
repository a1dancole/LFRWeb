import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki.component.scss'],
  templateUrl: './wiki.component.html',
})
export class WikiComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
