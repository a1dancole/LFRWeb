import { Component, OnInit } from "@angular/core";

@Component({
  styleUrls: ['./wiki-vault-of-archavon.component.scss'],
  templateUrl: './wiki-vault-of-archavon.component.html',
})
export class WikiVaultOfArchavonComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
