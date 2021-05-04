import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-hunter.component.scss'],
  templateUrl: './wiki-classes-hunter.component.html',
})
export class WikiClassesHunterComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
