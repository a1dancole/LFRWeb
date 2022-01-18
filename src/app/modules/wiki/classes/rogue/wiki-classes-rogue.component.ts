import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-rogue.component.scss'],
  templateUrl: './wiki-classes-rogue.component.html',
})
export class WikiClassesRogueComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
