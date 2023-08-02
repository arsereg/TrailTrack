import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
})
export class ProfileComponent implements OnInit {

  name: string = '';
  email: string = '';
  expertiseLevel: string = '';

  constructor(private httpClient: HttpClient ){
  }

  clearCredentials() {
    localStorage.clear();
    location.href = 'sign-in';
  }

  ngOnInit(): void {
    this.httpClient.get('http://192.168.100.30:8080/api/account').subscribe(value => {
      // @ts-ignore
      this.name = value['firstName'];
      // @ts-ignore
      this.email = value['email'];
      // @ts-ignore
      this.expertiseLevel = value['expertiseLevel'];
    });
  }

  goToChangePassword() {
    location.href = 'change-password'
  }
}
