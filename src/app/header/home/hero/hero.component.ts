import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']

})
export class HeroComponent {

  constructor(private subscriptService: SubscribeService) {
    console.log('HeroComponent Subscription! '+ subscriptService);
  }

  onSubscribeHero() {
    this.subscriptService.onSubscribeClicked('Monthly');
  }
}
