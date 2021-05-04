import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-shaman.component.scss'],
  templateUrl: './wiki-classes-shaman.component.html',
})
export class WikiClassesShamanComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
