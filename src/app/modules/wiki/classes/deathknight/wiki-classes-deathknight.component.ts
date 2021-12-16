import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-deathknight.component.scss'],
  templateUrl: './wiki-classes-deathknight.component.html',
})
export class WikiClassesDeathknightComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
