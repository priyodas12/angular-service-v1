import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [SubscribeService]
})
export class HeroComponent {

  constructor(private subscriptService: SubscribeService) {
    console.log(`HeroComponent : ${subscriptService}`);
  }

  onSubscribeHero() {
    this.subscriptService.onSubscribeClicked('Monthly');
  }
}
