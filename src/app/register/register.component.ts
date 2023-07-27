import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private dialog: MatDialog) {
  }

  displayTermsAndConditions() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = '90vh';
    dialogConfig.panelClass = 'dialog-style'
    this.dialog.open(TermsAndConditionsComponent, dialogConfig);
  }



}
