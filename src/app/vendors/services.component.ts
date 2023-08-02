import {Component, OnInit} from '@angular/core';
import {Vendor} from "../models/vendor";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  vendors: Vendor[] | undefined;


  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.httpClient.get('http://192.168.100.30:8080/api/providers').subscribe(value => {
      this.vendors = value as Vendor[];
    });
  }




}
