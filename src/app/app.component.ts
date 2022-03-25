import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalRouteService } from './modules/shared/services/canonicalRoute.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _title: Title,
    private _meta: Meta,
    private _canonicalRouteService: CanonicalRouteService
  ) {}

  ngOnInit(): void {
    this._title.setTitle('Looking For Raid - WOTLK5Man - Instant 80');

    this._meta.addTags([
      {
        name: 'keywords',
        content:
          'WOTLK, Private Server, 3.3.5, 3.3.5a, WOTLK5Man, Looking For Raid, LFR, 5Man, Instant 80',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Potter' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Looking For Raid is a server focused on delivering the Wrath of the Lich King experience in a reworked 5-man environment. Start at level 80 with 350 professions and all reputation tabards. Join groups quickly and progress through all raids with our progression system. ',
      },
      { charset: 'UTF-8' },
    ]);

    this._canonicalRouteService.setCanonicalURL();
  }

  title = 'Looking For Raid';
}
