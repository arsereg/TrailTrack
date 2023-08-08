import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;

  validPreviousPassword = true;
  validNewPassword = true;

  invalidCredentials = false;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.changePasswordForm = this.fb.group({
      'previousPassword': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'newPassword': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  changePassword() {
    const {value, valid} = this.changePasswordForm;
    this.validPreviousPassword = this.changePasswordForm.controls['previousPassword'].valid;
    this.validNewPassword = this.changePasswordForm.controls['newPassword'].valid;
    if(valid){
      this.executeChangePassword(value);
    }
  }

  private executeChangePassword(value: any) {
    if(this.changePasswordForm.valid){
      const userModel = {
        "currentPassword": value['previousPassword'],
        "newPassword": value['newPassword']
      }

      this.httpClient.post('http://192.168.42.77:8080/api/account/change-password', userModel).subscribe(result => {
        location.href = 'profile';
      });

    }
  }
}
