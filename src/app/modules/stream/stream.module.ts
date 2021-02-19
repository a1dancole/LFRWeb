import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { StreamComponent } from "./stream.component";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [StreamComponent],
  providers: [
  ],
  imports: [SharedModule, MatGridListModule],
})
export class StreamModule {}
