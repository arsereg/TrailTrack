import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  center = new google.maps.LatLng(10.533053, -84.567921);
  mapTypeId = google.maps.MapTypeId.HYBRID
  zoom = 16
  options: google.maps.MapOptions = {
    scrollwheel: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false
  };
}
