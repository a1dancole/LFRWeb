import { Component } from "@angular/core";

@Component({
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent {


  public isDesktop(): boolean {
    return window.screen.width > 768;
  }

}
