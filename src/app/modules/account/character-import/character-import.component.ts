import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Character } from '../../shared/models/character';
import { UserProfile } from '../../shared/models/userprofile';
import { UserCookieService } from '../../shared/services/userCookie.service';
import { AccountService } from '../account.service';
import { CharacterImport } from '../models/characterImport';
import { CharacterUnstuck } from '../models/characterUnstuck';
import { InstructionsDialogComponent } from './dialogs/instructions.dialog.component';

@Component({
  styleUrls: ['./character-import.component.scss'],
  templateUrl: './character-import.component.html',
})
export class CharacterImportComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;

  public userProfile!: UserProfile | undefined;
  public characterProfile: File | null = null;
  public uploading: boolean = false;
  public uploadButtonText: string = "Select File";

  public selectedCharacter: Character | null = null;

  constructor(
    private _userCookieService: UserCookieService,
    private _accountService: AccountService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userProfile = this._userCookieService.getLoggedInUser();
  }

  public UploadCharacterProfile(event: any): void {
    this.characterProfile = event.target.files[0];
    this.uploadButtonText = event.target.files[0].name;
  }

  public OpenInstructionsDialog(): void {
    const dialogRef = this._dialog.open(InstructionsDialogComponent);
  }

  public Import() {
    if (this.selectedCharacter == null) {
      this._snackBar.open(`You must select a character`, 'Error', {
        duration: 2000,
        panelClass: ['warning'],
      });
      return;
    }

    let characterImport: CharacterImport = {
      characterName: this.selectedCharacter.name,
      characterProfile: this.characterProfile!
    };

    this.uploading = true;

    this._accountService
      .characterImport(characterImport)
      .subscribe(
        (response) => {
          this._snackBar.open(
            `${characterImport.characterName} succesfully imported`,
            undefined,
            {
              duration: 2000,
            }
          );
        },
        (error: any) => {
          console.log(error);
          this._snackBar.open(`${error.error.title}`, 'Error', {
            duration: 2000,
            panelClass: ['warning'],
          });
        }
      )
      .add(() => {
        this.uploading = false;
        this.characterProfile = null;
        this.uploadButtonText = "Select File";
      });
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
