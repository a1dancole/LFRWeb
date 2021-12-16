import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-warrior.component.scss'],
  templateUrl: './wiki-classes-warrior.component.html',
})
export class WikiClassesWarriorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
