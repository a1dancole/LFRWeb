import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Settings } from "../models/settings";

@Injectable({providedIn: 'root'})
export class SettingsService {
  public settings!: Settings;

  constructor(private _httpClient: HttpClient) { }

  public initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._httpClient.get<Settings>('./assets/settings/settings.json').subscribe(response => {
        this.settings = response;
        resolve();
      });
    })

  }
}
