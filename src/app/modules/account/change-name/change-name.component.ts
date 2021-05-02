import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Character } from "../../shared/models/character";
import { UserProfile } from "../../shared/models/userprofile";
import { UserCookieService } from "../../shared/services/userCookie.service";
import { AccountService } from "../account.service";
import { CharacterService, GenericPaypalDialogData } from "../generic-paypal-dialog/generic-paypal-dialog-data";
import { GenericPaypalDialogComponent } from "../generic-paypal-dialog/generic-paypal-dialog.component";
import { CharacterUnstuck } from "../models/characterUnstuck";

@Component({
  styleUrls: ['./change-name.component.scss'],
  templateUrl: './change-name.component.html',
})

export class ChangeNameComponent implements OnInit {

  public userProfile!: UserProfile | undefined
  public selectedCharacter!: Character;

  constructor(private _userCookieService: UserCookieService, private _snackBar: MatSnackBar, private _dialog: MatDialog) { }

  ngOnInit() {
    this.userProfile = this._userCookieService.getLoggedInUser();
  }

  public Purchase() {
    if(!this.selectedCharacter) {
      this._snackBar.open(`You must select a character`, 'Error', {
        duration: 2000,
        panelClass: ['warning'],
      });
      return;
    }

    let paypalDialogData: GenericPaypalDialogData = {character: this.selectedCharacter.name, itemCost: 3, itemName: 'Character Name Change', characterService: CharacterService.NameChange };

    const dialogRef = this._dialog.open(GenericPaypalDialogComponent, {
      data: paypalDialogData,
      disableClose: true
    }).afterClosed().subscribe((success: boolean) => {
    })
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
