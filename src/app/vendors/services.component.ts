import { Component } from '@angular/core';
import {Vendor} from "../models/vendor";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  vendors: Vendor[] = [
    new Vendor( 1, 'Vendor 1', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 2, 'Vendor 2', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 3, 'Vendor 3', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 4, 'Vendor 4', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 5, 'Vendor 5', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 6, 'Vendor 6', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 7, 'Vendor 7', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 8, 'Vendor 8', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 9, 'Vendor 9', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 10, 'Vendor 10', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 11, 'Vendor 11', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 12, 'Vendor 12', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 13, 'Vendor 13', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 14, 'Vendor 14', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
    new Vendor( 15, 'Vendor 15', 'Vendor description', '123456', '654321987', 'https://picsum.photos/433/166'),
  ];

}
