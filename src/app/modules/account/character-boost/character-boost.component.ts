import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Character } from "../../shared/models/character";
import { UserProfile } from "../../shared/models/userprofile";
import { UserCookieService } from "../../shared/services/userCookie.service";
import { CharacterService, GenericPaypalDialogData } from "../generic-paypal-dialog/generic-paypal-dialog-data";
import { GenericPaypalDialogComponent } from "../generic-paypal-dialog/generic-paypal-dialog.component";

@Component({
  styleUrls: ['./character-boost.component.scss'],
  templateUrl: './character-boost.component.html',
})

export class CharacterBoostComponent implements OnInit {

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

    let paypalDialogData: GenericPaypalDialogData = {character: this.selectedCharacter.name, itemCost: 10, itemName: 'Character Boost', characterService: CharacterService.CharacterBoost };

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
