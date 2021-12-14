import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  styleUrls: ['./howtoconnect.component.scss'],
  templateUrl: './howtoconnect.component.html',
})
export class HowToConnectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public downloadClient(): void {
    window.open(environment.clientDownloadUrl, "_blank");
  }
}
