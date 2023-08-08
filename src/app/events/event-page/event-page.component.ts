import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit{
  id: number | null = null;
  title: string = 'Vendor name';
  subtitle: string = 'Vendor description';
  description: string | null = null;
  eventDate: string | null = null;
  phone: string = '';
  contactLink: string = '';
  imageUrl: string = ''

  activatedRoute: ActivatedRoute;

  constructor(private activeRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute = activeRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.httpClient.get('http://192.168.42.77:8080/api/events/' + this.id).subscribe(value => {
        // @ts-ignore
        this.title = value['title'];
        // @ts-ignore
        this.subtitle = value['subtitle'];
        // @ts-ignore
        this.description = value['description'];
        // @ts-ignore
        this.eventDate = value['eventDate'];
        // @ts-ignore
        this.phone = value['phone'];
        // @ts-ignore
        this.contactLink = value['contactLink'];
        // @ts-ignore
        this.imageUrl = value['imageUrl'];
      });
    });
  }
}
