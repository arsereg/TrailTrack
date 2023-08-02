import {Component, OnInit} from '@angular/core';
import {Vendor} from "../models/vendor";
import {HttpClient} from "@angular/common/http";
import {Events} from "../models/events";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
})
export class EventsComponent implements OnInit{


  events: Events[] = [];

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.httpClient.get('http://192.168.100.30:8080/api/events').subscribe(value => {
      console.log(value)
      for (let i in value){
        // @ts-ignore
        this.events.push(value[i])
      }
    });
  }

}
