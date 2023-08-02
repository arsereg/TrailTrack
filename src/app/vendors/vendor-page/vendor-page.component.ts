import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.css'],
  styles: ['@import "https://use.typekit.net/kyt3qet.css";']
})
export class VendorPageComponent implements OnInit{
  id: number | null = null;
  name: string = 'Vendor name';
  description: string = 'Vendor description';
  phoneNumber: string | null = null;
  whatsapp: string | null = null;
  image: string = '';
  content: string = '';
  workingHours: string = ''
  service: string = ''

  activatedRoute: ActivatedRoute;

  constructor(activeRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute = activeRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(`id: ${this.id}`)
      this.httpClient.get('http://192.168.100.30:8080/api/providers/' + this.id).subscribe(value => {
        // @ts-ignore
        this.name = value['name'];
        // @ts-ignore
        this.description = value['description'];
        // @ts-ignore
        this.phoneNumber = value['phoneNumber'];
        // @ts-ignore
        this.whatsapp = value['whatsapp'];
        // @ts-ignore
        this.image = value['imageUrl'];
        // @ts-ignore
        this.content = value['content'];
        // @ts-ignore
        this.workingHours = value['workingHours'];
        // @ts-ignore
        this.service = value['service'];
      });
    });
  }
}
