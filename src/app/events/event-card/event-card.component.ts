import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input()
  id: number | null = null;
  @Input()
  name: string = 'Vendor name';
  @Input()
  description: string = 'Vendor description';
  @Input()
  phoneNumber: string | null = null;
  @Input()
  whatsapp: string | null = null;
  @Input()
  image: string = '';

  navigateToVendorPage(){
    let uri = `vendor/${this.id}/${this.name}/${this.description}/${this.phoneNumber}/${this.whatsapp}/${this.image}`
    location.href=uri;
  }
}
