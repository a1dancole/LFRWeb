import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-druid.component.scss'],
  templateUrl: './wiki-classes-druid.component.html',
})
export class WikiClassesDruidComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
