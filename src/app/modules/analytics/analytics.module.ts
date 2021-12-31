import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AnalyticsComponent } from "./analytics.component";
import { AnalyticsService } from "./analytics.service";
import { HostComponent } from "./host/host.component";
import { RaidGroupDialogComponent } from "./raids/raid-group-dialog/raid-group-dialog.component";
import { RaidsComponent } from "./raids/raids.component";
import { ServerComponent } from "./server/server.component";

@NgModule({
  declarations: [AnalyticsComponent, RaidsComponent, HostComponent, ServerComponent, RaidGroupDialogComponent],
  providers: [
    AnalyticsService
  ],
  imports: [SharedModule, RouterModule],
})
export class AnalyticsModule {}
