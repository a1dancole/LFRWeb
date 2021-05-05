import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule, YouTubePlayerModule]
})
export class HomeModule { }
