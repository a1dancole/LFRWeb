import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LeaderboardBottomsheetComponent } from "./bottom-sheet/leaderboard-bottomsheet.component";
import { LeaderboardsComponent } from "./leaderboards.component";
import { LeaderboardsService } from "./leaderboards.service";

@NgModule({
  declarations: [LeaderboardsComponent, LeaderboardBottomsheetComponent],
  providers: [
    LeaderboardsService
  ],
  imports: [SharedModule, RouterModule],
})
export class LeaderboardsModule {}
