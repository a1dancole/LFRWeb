import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-paladin.component.scss'],
  templateUrl: './wiki-classes-paladin.component.html',
})
export class WikiClassesPaladinComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
