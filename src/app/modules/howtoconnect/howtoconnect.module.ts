import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HowToConnectComponent } from "./howtoconnect.component";

@NgModule({
  declarations: [HowToConnectComponent],
  providers: [
  ],
  imports: [SharedModule, MatGridListModule, RouterModule],
})
export class HowToConnectModule {}
