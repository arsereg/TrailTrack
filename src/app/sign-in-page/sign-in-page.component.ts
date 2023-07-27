import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";


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
