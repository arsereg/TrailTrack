import {Component, OnInit} from '@angular/core';
import {Vendor} from "../models/vendor";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  vendors: Vendor[]= [];


  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.loadAllServices()
  }

  executeSearch($event: Event) {
    let inputData = ($event.target as HTMLInputElement).value;
    if(!inputData){
      this.loadAllServices();
    }else{
      this.searchServices(inputData);
    }
    ($event.target as HTMLInputElement).blur();
  }

  loadAllServices(){
    this.vendors = [];
    this.httpClient.get('http://192.168.100.30:8080/api/providers').subscribe(value => {
      for (let i in value){
        // @ts-ignore
        this.vendors.push(value[i])
      }
    });
  }

  private searchServices(inputData: string) {
    this.vendors = [];
    this.httpClient.get(`http://192.168.100.30:8080/api/providers/by-name/${inputData}`).subscribe(value => {
      for (let i in value){
        // @ts-ignore
        this.vendors.push(value[i])
      }
    });

  }




}
