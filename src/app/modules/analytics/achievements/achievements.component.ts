import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Achievement } from '../models/achievement';

@Component({
  styleUrls: ['./achievements.component.scss'],
  templateUrl: './achievements.component.html',
})
export class AchievementsComponent implements OnInit {
  public achievements: Achievement[] = [];

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
      .getAchievements({
        searchTerm: this.searchTerm,
        pageSize: this.pageSize,
        pageNumber: this.pageNumber
      })
      .subscribe((response) => {
        this.achievements = response.data;
        this.length = response.length;
      });
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
