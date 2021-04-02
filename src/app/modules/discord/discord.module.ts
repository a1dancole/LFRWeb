import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DiscordComponent } from "./discord.component";

@NgModule({
  declarations: [DiscordComponent],
  providers: [
  ],
  imports: [SharedModule],
})
export class DiscordModule {}
