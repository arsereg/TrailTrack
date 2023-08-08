import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  registerForm: FormGroup;

  validFullName: boolean = true;
  validEmail: boolean = true;
  validUserName: boolean = true;
  validPassword: boolean = true;
  validConfirmPassword: boolean = true;

  constructor(private dialog: MatDialog, private fb: FormBuilder, private httpClient: HttpClient){
    this.registerForm = this.fb.group({
      'fullName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'userName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'expertiseLevel': new FormControl()
    });
  }

  displayTermsAndConditions() {
    const {value, valid} = this.registerForm;
    this.validFullName = this.registerForm.controls['fullName'].valid;
    this.validEmail = this.registerForm.controls['email'].valid;
    this.validUserName = this.registerForm.controls['userName'].valid;
    this.validPassword = this.registerForm.controls['password'].valid;
    this.validConfirmPassword = this.registerForm.controls['confirmPassword'].valid;
    if(valid){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.maxHeight = '90vh';
      dialogConfig.panelClass = 'dialog-style'
      let dialogRef = this.dialog.open(TermsAndConditionsComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(dialogValue => {
        if(dialogValue === 'Accepted'){
          this.registerNewUser(value)

        }else{
          alert('Not implemented yet')
        }
      });
    }
  }



  ngOnInit(): void {
  }

  private registerNewUser(value: any) {

    if(this.registerForm.valid){
      const userModel = {
        "login": value['userName'],
        "password": value['password'],
        "firstName": value['fullName'],
        "lastName": '',
        "email": value['email'],
        "imageUrl": '',
        "expertiseLevel": value['expertiseLevel'],
        "createdBy": "admin",
        "authorities:": ["ROLE_USER"]
      }

      this.httpClient.post('http://192.168.42.77:8080/api/register', userModel).subscribe(result => {
        location.href = 'login';
      });

    }

  }

  protected readonly location = location;
}
