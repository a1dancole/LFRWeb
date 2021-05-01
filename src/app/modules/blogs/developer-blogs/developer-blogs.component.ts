import { Component } from "@angular/core";

@Component({
  selector: 'developer-blogs',
  styleUrls: ['./developer-blogs.component.scss'],
  templateUrl: './developer-blogs.component.html'
})
export class DeveloperBlogsComponent {
  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
