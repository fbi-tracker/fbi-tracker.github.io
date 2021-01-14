import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public location: Position;
  public motion : DeviceRotationRate;

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((loc) => this.location = loc);
    }

    window.addEventListener('deviceorientation', (event) => {
      this.motion = event;
    });
  }

}
