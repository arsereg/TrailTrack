import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit{
  id: number | null = null;
  name: string = 'Vendor name';
  description: string = 'Vendor description';
  phoneNumber: string | null = null;
  whatsapp: string | null = null;
  image: string = '';
  content: string = '';
  eventDate: string = ''

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
      this.content = 'Dear Off-Road Enthusiast,\n' +
        'Get ready to rev your engines and conquer the untamed wilderness! We are thrilled to invite you to the adrenaline-fueled off-road event of the year: the "Jurassic Run" 4x4 Tournament! Prepare to unleash your inner explorer and embark on an unforgettable adventure in the breathtaking landscapes of Matapalo, Puntarenas, Costa Rica.\n' +
        '\n' +
        'Why Attend Jurassic Run?\n' +
        'Thrilling Off-Road Challenges: Take on challenging terrains, rugged trails, and exhilarating obstacles that will push your driving skills to the limit. Experience the rush of adrenaline as you navigate through the wild and unpredictable landscapes.\n' +
        'Spectacular Scenery: Matapalo is a hidden gem nestled amidst lush rainforests, offering awe-inspiring views of cascading waterfalls, towering mountains, and abundant wildlife. Prepare to be mesmerized by the natural wonders that surround you throughout the event.\n' +
        'Friendly Competition: Join a community of like-minded adventurers and off-road enthusiasts who share your passion for conquering the great outdoors. Compete against skilled drivers from around the world and forge lasting connections with fellow thrill-seekers.\n' +
        'Family-Friendly Fun: Bring along your loved ones and make it a memorable weekend getaway! While you conquer the off-road challenges, your family and friends can enjoy various activities, including guided nature hikes, wildlife spotting, and relaxing by the pristine beaches.'
      this.eventDate = 'Saturday, July 14th, 2023'
    });
  }
}
