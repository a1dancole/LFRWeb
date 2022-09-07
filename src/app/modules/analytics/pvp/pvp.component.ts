import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Achievement } from '../models/achievement';
import { PvpKill, PvpKills } from '../models/pvpKills';

@Component({
  styleUrls: ['./pvp.component.scss'],
  templateUrl: './pvp.component.html',
})
export class PvpComponent implements OnInit {
  public pvpKills: PvpKills = {pvpKills: [], maxKillCount: 0};

  public searchTerm: string = '';
  public pageSize: number = 10;
  public length: number = 10;
  public pageNumber: number = 0;

  constructor(
    private _analyticsService: AnalyticsService,
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
      .queryPvp({
        searchTerm: this.searchTerm,
        pageSize: this.pageSize,
        pageNumber: this.pageNumber
      })
      .subscribe((response) => {
        this.pvpKills = response.data;
        this.length = response.length;
      });
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
