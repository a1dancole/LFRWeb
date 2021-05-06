import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { TrelloCard } from '../shared/models/trelloCard';
import { TrelloService } from './trello.service';

@Component({
  styleUrls: ['./changes.component.scss'],
  templateUrl: './changes.component.html',
})
export class ChangesComponent implements OnInit {
  public releasedCards: [any, TrelloCard[]][] = [];

  constructor(
    private _trelloService: TrelloService,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit() {
    this._trelloService
      .GetCardsInList(environment.trelloReleasedListId)
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
