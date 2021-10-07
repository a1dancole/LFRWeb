import { Component, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Raid } from '../../analytics/models/raid';
import { RaidDifficulty } from '../../analytics/models/raidDifficulty';
import { WingSelectList } from '../../analytics/models/wingSelectList';

@Component({
  selector: 'leaderboard-bottomsheet',
  styleUrls: ['./leaderboard-bottomsheet.component.scss'],
  templateUrl: './leaderboard-bottomsheet.component.html',
})
export class LeaderboardBottomsheetComponent {
  public raids: Raid[] = [];
  //Default to Naxx
  public selectedRaid: Raid = {
    mapId: 533,
    name: 'Naxxramas',
  };

  public raidDifficulties: RaidDifficulty[] = [];
  //Default to 10-Man
  public selectedDifficulty: RaidDifficulty = {
    id: 0,
    name: '10 Man',
  };

  public wingsSelectList: WingSelectList[] = [];
  public selectedWing: WingSelectList = {
    mapId: 533,
    name: 'The Arachnid Quarter',
  };

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: {
      _raids: Raid[];
      _raidDifficulties: RaidDifficulty[];
      _wingSelectList: WingSelectList[];
    },
    private _bottomsheet: MatBottomSheetRef<LeaderboardBottomsheetComponent>
  ) {
    this.raids = data._raids;
    this.raidDifficulties = data._raidDifficulties;
    this.wingsSelectList = data._wingSelectList;
  }

  public getWingsForSelectedMap(): WingSelectList[] {
    return this.wingsSelectList.filter(
      (o) => o.mapId == this.selectedRaid.mapId
    );
  }

  public dismiss(): void {
    this._bottomsheet.dismiss({
      _selectedRaid: this.selectedRaid,
      _selectedDifficulty: this.selectedDifficulty,
      _selectedWing: this.selectedWing,
    });
  }
}
