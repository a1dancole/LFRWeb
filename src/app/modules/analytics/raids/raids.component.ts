import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnalyticsService } from '../analytics.service';
import { Encounter } from '../models/encounter';
import { Raid } from '../models/raid';
import { RaidDifficulty } from '../models/raidDifficulty';
import { RaidGroupDialogComponent } from './raid-group-dialog/raid-group-dialog.component';

@Component({
  styleUrls: ['./raids.component.scss'],
  templateUrl: './raids.component.html',
})
export class RaidsComponent implements OnInit {
  public encounters: Encounter[] = [];
  public raids: Raid[] = [
    { mapId: 533, name: 'Naxxramas' },
    { mapId: 615, name: 'Obsidian Sanctum'},
    { mapId: 616, name: 'Eye of Eternity' },
  ];
  //Default to Naxx
  public selectedRaid: Raid = {
    mapId: 533,
    name: 'Naxxramas',
  };

  public raidDifficulties: RaidDifficulty[] = [
    { id: 0, name: '10 Man' },
    { id: 1, name: '25 Man' },
  ];

  //Default to 10-Man
  public selectedDifficulty: RaidDifficulty = {
    id: 0,
    name: '10 Man',
  };

  public searchTerm: string = '';
  public pageSize: number = 10;
  public length: number = 10;
  public pageNumber: number = 1;

  constructor(
    private _analyticsService: AnalyticsService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  public paginatorPaged(event: any) {
    this.pageNumber = event.pageIndex;
    this.loadData();
  }

  public loadData(): void {
    this._analyticsService
      .getEncounters({
        mapId: this.selectedRaid.mapId,
        difficultyId: this.selectedDifficulty.id,
        searchTerm: this.searchTerm,
        pageSize: this.pageSize,
        pageNumber: this.pageNumber
      })
      .subscribe((response) => {
        this.encounters = response.data;
        this.length = response.length;
      });
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

  public loadGroup(encounter: Encounter): void {
    const dialogRef = this._dialog
      .open(RaidGroupDialogComponent, {
        data: encounter,
      })
      .afterClosed()
      .subscribe((success: boolean) => {});
  }
}
