import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes.component.scss'],
  templateUrl: './wiki-classes.component.html',
})
export class WikiClassesComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
