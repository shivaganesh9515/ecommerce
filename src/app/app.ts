import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected title = 'ecommerce';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }
  }
}
