import { Component } from '@angular/core';
import {SideMenuVisibilityService} from "../services/side-menu-visibility-service/side-menu-visibility.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {

  constructor(private sideMenuVisibilityService: SideMenuVisibilityService) { }

  toggleSideMenu() {
    this.sideMenuVisibilityService.toggleSideMenuVisibility();
  }
}
