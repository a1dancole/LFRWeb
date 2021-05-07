import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Character } from '../../shared/models/character';
import { UserProfile } from '../../shared/models/userprofile';
import { UserCookieService } from '../../shared/services/userCookie.service';
import {
  CharacterService,
  GenericPaypalDialogData,
} from '../generic-paypal-dialog/generic-paypal-dialog-data';
import { GenericPaypalDialogComponent } from '../generic-paypal-dialog/generic-paypal-dialog.component';
import { GoldPaypalDialogData } from './gold-paypal-dialog/generic-paypal-dialog-data';
import { GoldPaypalDialog } from './gold-paypal-dialog/generic-paypal-dialog.component';

@Component({
  styleUrls: ['./gold.component.scss'],
  templateUrl: './gold.component.html',
})
export class GoldComponent implements OnInit {
  public userProfile!: UserProfile | undefined;
  public selectedCharacter!: Character;
  public goldAmount: number = 0;

  constructor(
    private _userCookieService: UserCookieService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userProfile = this._userCookieService.getLoggedInUser();
  }

  public getFormattedTotal(): string {
    let currencyFormatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP'
    })

    return `Purchase (${currencyFormatter.format(this.calculateTotal())})`;
  }

  public Purchase(): void {
    if (!this.selectedCharacter) {
      this._snackBar.open(`You must select a character`, 'Error', {
        duration: 2000,
        panelClass: ['warning'],
      });
      return;
    }

    let paypalDialogData: GoldPaypalDialogData = {
      character: this.selectedCharacter.name,
      itemCost: this.calculateTotal(),
      itemName: `${this.goldAmount} Gold`,
      goldAmount: this.goldAmount
    };

    const dialogRef = this._dialog
      .open(GoldPaypalDialog, {
        data: paypalDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((success: boolean) => {});
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  private calculateTotal(): number {
    return Math.round((this.goldAmount / 150 + Number.EPSILON) * 100) / 100;
  }
}
