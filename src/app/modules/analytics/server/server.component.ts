import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../analytics.service";
import { ActivePlayers } from "../models/activePlayers";
import { ClassBreakdown } from "../models/classBreakdown";

@Component({
  styleUrls: ['./server.component.scss'],
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {

  public activePlayers: ActivePlayers[] | undefined;
  public classBreakdown: ClassBreakdown[] | undefined;
  public cdata = [
    {
      "name": "Accounts",
      "value": 456
    },
    {
      "name": "Characters",
      "value": 700
    },
    {
      "name": "Guilds",
      "value": 12
    },
    {
      "name": "Boss Kills",
      "value": 2500
    },
    {
      "name": "Pvp Kills",
      "value": 8000
    },
    {
      "name": "Achievements",
      "value": 10500
    }
  ];

  constructor(private _analyticsService: AnalyticsService) {}
  ngOnInit(): void {
    this._analyticsService.getActivePlayers().subscribe(response => {
      this.activePlayers = response;
    });
    this._analyticsService.getClassBreakdown().subscribe(response => {
      this.classBreakdown= response;
    })
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
