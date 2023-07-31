import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
  ngOnInit(): void {
    // wait 5 seconds and then redirect to sign-in page
    const token = localStorage.getItem('token');
    self.setTimeout(() => {
      if(token){
        window.location.href = 'routes';
      }else{
        window.location.href = 'sign-in';
      }
    }, 3000);
  }

}
