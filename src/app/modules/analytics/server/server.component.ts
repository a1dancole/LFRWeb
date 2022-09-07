import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";
import { ActivePlayers } from "../models/activePlayers";
import { ClassBreakdown } from "../models/classBreakdown";
import { OtherBreakdowns } from "../models/otherBreakdowns";

@Component({
  styleUrls: ['./server.component.scss'],
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {

  public activePlayers: ActivePlayers[] | undefined;
  public classBreakdown: ClassBreakdown[] | undefined;
  public otherBreakdowns: OtherBreakdowns[] | undefined;
  public view: [number, number] = [800, 350];

  constructor(private _analyticsService: AnalyticsService) {}
  ngOnInit(): void {
    this._analyticsService.getActivePlayers().subscribe(response => {
      this.activePlayers = response;
    });
    this._analyticsService.getClassBreakdown().subscribe(response => {
      this.classBreakdown= response;
    });
    this._analyticsService.getOtherBreakdowns().subscribe(response => {
      this.otherBreakdowns= response;
    });
  }

  public resizeNumbersCard(width: any): void {
    this.view = [width, 350];
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
