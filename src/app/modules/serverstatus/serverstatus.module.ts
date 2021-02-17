import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ServerStatusComponent } from "./serverstatus.component";

@NgModule({
  declarations: [ServerStatusComponent],
  providers: [
  ],
  imports: [SharedModule],
})
export class ServerStatusModule {}
