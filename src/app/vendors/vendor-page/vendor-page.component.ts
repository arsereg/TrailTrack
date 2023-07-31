import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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

  activatedRoute: ActivatedRoute;

  constructor(activeRoute: ActivatedRoute) {
    this.activatedRoute = activeRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      this.description = params['description'];
      this.phoneNumber = params['phoneNumber'];
      this.whatsapp = params['whatsapp'];
      this.image = params['image'];
      this.image = 'https://picsum.photos/433/400'
      this.content = 'Come to our spare parts store and discover a world of possibilities for your vehicle! 🚗💥 At La Guacamaya, we take pride in offering a wide selection of high-quality spare parts and accessories in Costa Rica.\n' +
        'Do you need a spare part for your car? We\'re here to help! We have an expert team that will provide you with personalized advice and guide you to find the exact part you need. Whether you\'re looking for parts for the engine, brakes, suspension, transmission, or any other system of your vehicle, we have what you need!'
      this.workingHours = 'Mon - Sat, 8:00am to 4:00pm'
    });
  }
}
