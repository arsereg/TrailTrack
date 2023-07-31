import { Component } from '@angular/core';
import {Vendor} from "../models/vendor";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";'],
})
export class EventsComponent {
  vendors: Vendor[] = [
    new Vendor( '1', 'Event 1', 'Event 1 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '2', 'Event 2', 'Event 2 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '3', 'Event 3', 'Event 3 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '4', 'Event 4', 'Event 4 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '5', 'Event 5', 'Event 5 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '6', 'Event 6', 'Event 6 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '7', 'Event 7', 'Event 7 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '8', 'Event 8', 'Event 8 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '9', 'Event 9', 'Event 9 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '10', 'Event 10', 'Event 10 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '11', 'Event 11', 'Event 11 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '12', 'Event 12', 'Event 12 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '13', 'Event 13', 'Event 13 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '14', 'Event 14', 'Event 14 description', '123456', '654321987', 'https://picsum.photos/433/277'),
    new Vendor( '15', 'Event 15', 'Event 15 description', '123456', '654321987', 'https://picsum.photos/433/277'),
  ];

}
