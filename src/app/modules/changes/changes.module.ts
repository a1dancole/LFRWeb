import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ChangesComponent } from "./changes.component";
import { TrelloService } from "./trello.service";

@NgModule({
  declarations: [ChangesComponent],
  providers: [
    TrelloService
  ],
  imports: [SharedModule],
})
export class ChangesModule {}
