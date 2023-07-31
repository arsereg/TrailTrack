import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuVisibilityService {
  private isSideMenuVisible: boolean = false;

  toggleSideMenuVisibility() {
    this.isSideMenuVisible = !this.isSideMenuVisible;
  }

  isSideMenuCurrentlyVisible() {
    return this.isSideMenuVisible;
  }
}
