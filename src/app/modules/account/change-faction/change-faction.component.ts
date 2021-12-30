import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Character } from "../../shared/models/character";
import { UserProfile } from "../../shared/models/userprofile";
import { UserCookieService } from "../../shared/services/userCookie.service";
import { CharacterService, GenericPaypalDialogData } from "../generic-paypal-dialog/generic-paypal-dialog-data";
import { GenericPaypalDialogComponent } from "../generic-paypal-dialog/generic-paypal-dialog.component";
import { StoreService } from "../store/store.service";

@Component({
  styleUrls: ['./change-faction.component.scss'],
  templateUrl: './change-faction.component.html',
})

export class ChangeFactionComponent implements OnInit {

  public userProfile!: UserProfile | undefined
  public selectedCharacter!: Character;

  constructor(private _userCookieService: UserCookieService, private _snackBar: MatSnackBar, private _dialog: MatDialog, private _storeService: StoreService) { }

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

    if(this.userProfile?.isContributor) {
      this._storeService.processCharacterService(this.selectedCharacter.name, CharacterService.FactionChange).subscribe(response => {
        this._snackBar.open(`Order processed`, undefined, {
          duration: 2000,
        })
      }, (error: any) => {
        this._snackBar.open(`${error.error.detail}`, undefined, { duration: 2000 })
      });
    } else {
      let paypalDialogData: GenericPaypalDialogData = {character: this.selectedCharacter.name, itemCost: 5, itemName: 'Character Faction Change', characterService: CharacterService.FactionChange };

      const dialogRef = this._dialog.open(GenericPaypalDialogComponent, {
        data: paypalDialogData,
        disableClose: true
      }).afterClosed().subscribe((success: boolean) => {
      })
    }
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
