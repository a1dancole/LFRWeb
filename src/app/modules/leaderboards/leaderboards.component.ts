import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AnalyticsService } from '../analytics/analytics.service';
import { Encounter } from '../analytics/models/encounter';
import { Raid } from '../analytics/models/raid';
import { RaidDifficulty } from '../analytics/models/raidDifficulty';
import { Wing } from '../analytics/models/wing';
import { WingSelectList } from '../analytics/models/wingSelectList';
import { RaidGroupDialogComponent } from '../analytics/raids/raid-group-dialog/raid-group-dialog.component';
import { BooleanSelectList } from '../shared/models/booleanSelectList';
import { LeaderboardBottomsheetComponent } from './bottom-sheet/leaderboard-bottomsheet.component';

@Component({
  styleUrls: ['./leaderboards.component.scss'],
  templateUrl: './leaderboards.component.html',
})
export class LeaderboardsComponent implements OnInit {
  public topThree: Wing[] = [];
  public wings: Wing[] = [];
  public raids: Raid[] = [
    { mapId: 533, name: 'Naxxramas' },
    { mapId: 615, name: 'Obsidian Sanctum' },
    { mapId: 616, name: 'Eye of Eternity' }
  ];
  //Default to Naxx
  public selectedRaid: Raid = this.raids[0];

  public raidDifficulties: RaidDifficulty[] = [
    { id: 0, name: '10 Man' },
    { id: 1, name: '25 Man' },
  ];

  //Default to 10-Man
  public selectedDifficulty: RaidDifficulty = this.raidDifficulties[0];

  public wingsSelectList: WingSelectList[] = [
    { mapId: 533, name: 'The Arachnid Quarter' },
    { mapId: 533, name: 'The Construct Quarter' },
    { mapId: 533, name: 'The Plague Quarter' },
    { mapId: 533, name: 'The Military Quarter' },
    { mapId: 533, name: 'The Upper Necropolis' },
  ];

  public selectedWing: WingSelectList = this.wingsSelectList[0];

  public booleanSelectList: BooleanSelectList[] = [
    {name: 'Yes', value: true},
    {name: 'No', value: false}
  ];

  public hardMode: boolean = false;

  constructor(
    private _analyticsService: AnalyticsService,
    private _dialog: MatDialog,
    private _bottomsheet: MatBottomSheet
  ) {}

  ngOnInit(): void {}

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  public loadData(): void {
    this._analyticsService
      .getTopThreeGroupsForWing({
        map: this.selectedRaid.mapId,
        difficulty: this.selectedDifficulty.id,
        wing: this.doesRaidHaveWings() ? this.selectedWing.name : '',
        hardMode: this.hardMode
      })
      .subscribe((response) => {
        this.topThree = response;
      });

    this._analyticsService
      .getTopGroupsForWing({
        map: this.selectedRaid.mapId,
        difficulty: this.selectedDifficulty.id,
        wing: this.doesRaidHaveWings() ? this.selectedWing.name : '',
        hardMode: this.hardMode
      })
      .subscribe((response) => {
        this.wings = response;
      });
  }

  public getWingsForSelectedMap(): WingSelectList[] {
    return this.wingsSelectList.filter(
      (o) => o.mapId == this.selectedRaid.mapId
    );
  }

  public doesRaidHaveWings(): boolean {
    return this.wingsSelectList.some(o => o.mapId == this.selectedRaid.mapId);
  }

  public loadGroup(encounter: Encounter): void {
    const dialogRef = this._dialog
      .open(RaidGroupDialogComponent, {
        data: encounter,
      })
      .afterClosed()
      .subscribe((success: boolean) => {});
  }

  public getTrophyForIndex(index: number): string {
    switch (index) {
      case 0:
        return '../../../assets/images/first.png';
      case 1:
        return '../../../assets/images/second.png';
      case 2:
        return '../../../assets/images/third.png';
    }

    return '';
  }

  public getClassIconUri(playerClass: string): string {
    switch (playerClass) {
      case 'Mage':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg';
      case 'Hunter':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg';
      case 'Warlock':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg';
      case 'Priest':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg';
      case 'Rogue':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg';
      case 'Warrior':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg';
      case 'Druid':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg';
      case 'Shaman':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg';
      case 'Paladin':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg';
      case 'Death knight':
        return 'https://wow.zamimg.com/images/wow/icons/large/classicon_deathknight.jpg';
    }
    return '';
  }

  openSearchBottomSheet(): void {
    const bottomSheetRef = this._bottomsheet.open(
      LeaderboardBottomsheetComponent,
      {
        data: {
          _raids: this.raids,
          _raidDifficulties: this.raidDifficulties,
          _wingSelectList: this.wingsSelectList
        },
      }
    );
    bottomSheetRef.afterDismissed().subscribe((data) => {
      console.log(data);
      this.selectedRaid = data._selectedRaid;
      this.selectedDifficulty = data._selectedDifficulty;
      this.selectedWing = data._selectedWing;
      this.loadData();
    });
  }
}
