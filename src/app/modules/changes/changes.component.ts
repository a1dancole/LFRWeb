import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrelloCard } from '../shared/models/trelloCard';
import { SettingsService } from '../shared/services/settings.service';
import { TrelloService } from './trello.service';

@Component({
  styleUrls: ['./changes.component.scss'],
  templateUrl: './changes.component.html',
})
export class ChangesComponent implements OnInit {
  public releasedCards: [any, TrelloCard[]][] = [];

  constructor(
    private _trelloService: TrelloService,
    private _settingsService: SettingsService,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit() {
    this._trelloService
      .GetCardsInList(this._settingsService.settings.trelloReleasedListId)
      .subscribe(
        (response) => {
          this.releasedCards = Array.from<[any, TrelloCard[]]>(response.sort(
            (c1: TrelloCard, c2: TrelloCard) => {
              if (c1.dateLastActivity < c2.dateLastActivity) return 1;
              if (c1.dateLastActivity > c2.dateLastActivity) return -1;
              return 0;
            }
          ).reduce(
            (entryMap, e) => entryMap.set(new Date(e.dateLastActivity)?.getDate(), [...entryMap.get(new Date(e.dateLastActivity)?.getDate())||[], e]),
            new Map()).entries());
        },
        (error: any) => {
          this._snackBar.open(`${error.error.detail}`, 'Error', {
            duration: 2000,
            panelClass: ['warning'],
          });
        }
      );
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
