import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";']
})
export class LogInComponent implements OnInit{

    loginForm: FormGroup;

    validUserName = true;
    validPassword = true;

    invalidCredentials = false;

    constructor(private fb: FormBuilder, private httpClient: HttpClient) {
      this.loginForm = this.fb.group({
        'userName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      });
    }

  executeLogin(){
      const {value, valid} = this.loginForm;
      this.validUserName = this.loginForm.controls['userName'].valid;
      this.validPassword = this.loginForm.controls['password'].valid;
      if(valid){
        this.getCredentials(value);
      }
    }

  private getCredentials(value: any) {
      let payload = {
        "username": value['userName'],
        "password": value['password'],
        "rememberMe": true
      }
    this.httpClient.post('http://192.168.100.30:8080/api/authenticate', payload)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response['id_token']);
          location.href = 'routes';
        },
        (error: any) => {
          this.invalidCredentials = true;
        }
      );
  }

  ngOnInit(): void {
      this.loginForm.valueChanges.subscribe(() => {
        this.invalidCredentials = false;
      });
  }

  protected readonly location = location;
}
