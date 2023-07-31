import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  registerForm = new FormGroup({
    'fullName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'userName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  constructor(private dialog: MatDialog) {
  }

  displayTermsAndConditions() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = '90vh';
    dialogConfig.panelClass = 'dialog-style'
    this.dialog.open(TermsAndConditionsComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

  protected readonly location = location;
}
