import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
  ngOnInit(): void {
    // wait 5 seconds and then redirect to sign-in page
    self.setTimeout(() => {
      window.location.href = 'sign-in';
    }, 3000);
  }

}
