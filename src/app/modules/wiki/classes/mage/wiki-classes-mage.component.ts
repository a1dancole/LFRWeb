import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-classes-mage.component.scss'],
  templateUrl: './wiki-classes-mage.component.html',
})
export class WikiClassesMageComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
