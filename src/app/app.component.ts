import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrailTracker';

  constructor(private router: Router) {

  }

  shouldDisplayMenu() {
    let shouldntShow = ['/sign-in', '/register', '/'];
    let currentUri = this.router.url;
    for (let uri in shouldntShow) {
      if(currentUri === shouldntShow[uri]) {
        return false;
      }
    }
    return true;
  }
}
