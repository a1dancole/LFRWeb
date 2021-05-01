import { Component } from "@angular/core";

@Component({
  selector: 'admin-blogs',
  styleUrls: ['./admin-blogs.component.scss'],
  templateUrl: './admin-blogs.component.html'
})
export class AdminBlogsComponent {
  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}