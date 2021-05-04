import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-warlock.component.scss'],
  templateUrl: './wiki-classes-warlock.component.html',
})
export class WikiClassesWarlockComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
