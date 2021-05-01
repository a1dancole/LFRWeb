import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Character } from "../../shared/models/character";
import { UserProfile } from "../../shared/models/userprofile";
import { UserCookieService } from "../../shared/services/userCookie.service";
import { AccountService } from "../account.service";
import { CharacterUnstuck } from "../models/characterUnstuck";

@Component({
  styleUrls: ['./unstuck.component.scss'],
  templateUrl: './unstuck.component.html',
})

export class UnstuckComponent implements OnInit {

  public userProfile!: UserProfile | undefined
  public unstucking: boolean = false;

  public selectedCharacter!: Character;

  constructor(private _userCookieService: UserCookieService, private _accountService: AccountService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userProfile = this._userCookieService.getLoggedInUser();
  }

  public Unstuck() {
    if(!this.selectedCharacter)
    {
      this._snackBar.open(`You must select a character`, 'Error', {
        duration: 2000,
        panelClass: ['warning'],
      });
      return;
    }

    let characterUnstuck: CharacterUnstuck = {
      characterName: this.selectedCharacter.name
    };

    this.unstucking = true;

    this._accountService.characterUnstuck(characterUnstuck).subscribe(
      (response) => {
        this._snackBar.open(`${characterUnstuck.characterName} succesfully moved`, undefined, {
          duration: 2000,
        });
      },
      (error: any) => {
        console.log(error);
        this._snackBar.open(`${error.error.detail}`, 'Error', {
          duration: 2000,
          panelClass: ['warning'],
        });
      }
    )
    .add(() => {
      this.unstucking = false;
    });
  }
}
