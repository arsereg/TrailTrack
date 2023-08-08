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
    this.loadAllEvents();
  }

  loadAllEvents(){
    this.events = [];
    this.httpClient.get('http://192.168.42.77:8080/api/events').subscribe(value => {
      console.log(value)
      for (let i in value){
        // @ts-ignore
        this.events.push(value[i])
      }
    });
  }

  executeSearch($event: Event) {
    let inputData = ($event.target as HTMLInputElement).value;
    if(!inputData){
      this.loadAllEvents();
    }else{
      this.searchEvent(inputData);
    }
    ($event.target as HTMLInputElement).blur();

  }

  private searchEvent(inputData: string) {
    this.events = [];
    this.httpClient.get(`http://192.168.42.77:8080/api/events/by-name/${inputData}`).subscribe(value => {
      console.log(value)
      for (let i in value){
        // @ts-ignore
        this.events.push(value[i])
      }
    });

  }
}
