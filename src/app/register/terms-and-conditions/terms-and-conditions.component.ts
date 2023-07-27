import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {

  constructor(public dialogRef: MatDialogRef<String>) {
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
