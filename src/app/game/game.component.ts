import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public motion: DeviceRotationRate;

  private player: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('deviceorientation', (event) => {
      this.motion = event;
      this.player = document.getElementById('player');
      this.player.style.top = this.clamp((event.beta + 50), 10, 90) + "vh";
      this.player.style.left = this.clamp((event.gamma + 50), 10, 90) + "vw";
      console.log("top: " + this.player.style.top);
      console.log("left: " + this.player.style.left);
      //this.player.style.top = this.clamp((+this.player.style.top + event.beta), 10, 400) + "px";
      //this.player.style.left = this.clamp((+this.player.style.left + event.alpha), 10, 900) + "px";
    });
  }

  clamp (n: number, min: number, max: number): number {
    if (n < min) {
      return min;
    }
    if (n > max) {
      return max;
    }
    return n;
  }

}
