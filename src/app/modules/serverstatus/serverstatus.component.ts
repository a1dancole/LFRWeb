import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { SettingsService } from "../shared/services/settings.service";

@Component({
  styleUrls: ['./serverstatus.component.scss'],
  templateUrl: './serverstatus.component.html',
})
export class ServerStatusComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }
}
