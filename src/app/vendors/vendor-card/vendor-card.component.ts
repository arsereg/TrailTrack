import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css'],
  styles: [
    '@import "https://use.typekit.net/kyt3qet.css";',
    '@import "https://use.typekit.net/kyt3qet.css";']
})
export class VendorCardComponent {

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
