import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AdminBlogsComponent } from "./admin-blogs/admin-blogs.component";
import { BlogsComponent } from "./blogs.component";
import { DeveloperBlogsComponent } from "./developer-blogs/developer-blogs.component";

@NgModule({
  declarations: [BlogsComponent, AdminBlogsComponent, DeveloperBlogsComponent],
  imports: [SharedModule]
})
export class BlogsModule { }
