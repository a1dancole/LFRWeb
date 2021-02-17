import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BlogsComponent } from "./blogs/blogs.component";
import { HomeComponent } from "./home.component";
import { NewsComponent } from "./news/news.component";

@NgModule({
  declarations: [HomeComponent, NewsComponent, BlogsComponent],
  imports: [SharedModule]
})
export class HomeModule { }
