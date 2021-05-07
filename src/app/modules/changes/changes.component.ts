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
  public releasedCards: TrelloCard[] = [];

  constructor(
    private _trelloService: TrelloService,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit() {
    this._trelloService
      .GetCardsInList(environment.trelloReleasedListId)
      .subscribe(
        (response) => {
          this.releasedCards = response.filter((o,index) => index < 50);
        }
      );
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
