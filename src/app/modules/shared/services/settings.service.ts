import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Settings } from "../models/settings";

@Injectable({providedIn: 'root'})
export class SettingsService {
  public settings!: Settings;

  constructor(private _httpClient: HttpClient) { }

  public initialise() {
    this._httpClient.get<Settings>('./assets/settings/settings.json').subscribe(response => {
      this.settings = response;
    });
  }
}
