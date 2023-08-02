import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor() {
  }

  goToRegister() {
    window.location.href = '/register';
  }

  goToLogin() {
    window.location.href = '/login';
  }
}
