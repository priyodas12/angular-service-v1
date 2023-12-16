import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService]
})
export class HeaderComponent {

  constructor(private subscriptionService: SubscribeService) {
    console.log(`HeaderComponent : ${subscriptionService}`);
  }

  onHeaderSubscribe() {
    this.subscriptionService.onSubscribeClicked("Quaterly")
  }

}
