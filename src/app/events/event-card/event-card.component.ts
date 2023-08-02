import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input()
  id: number | string | null = null;
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

  navigateToEventPage(){
    let uri = encodeURI(`event/${this.id}`)
    location.href=uri;
  }
}
