import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-priest.component.scss'],
  templateUrl: './wiki-classes-priest.component.html',
})
export class WikiClassesPriestComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
