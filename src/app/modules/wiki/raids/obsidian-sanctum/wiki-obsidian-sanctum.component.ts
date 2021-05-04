import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-obsidian-sanctum.component.scss'],
  templateUrl: './wiki-obsidian-sanctum.component.html',
})
export class WikiObsidianSanctumComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
