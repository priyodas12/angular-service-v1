import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {

  selectedComponent: string = 'home';

  constructor(private subscriptionService: SubscribeService) {
    console.log(`HeaderComponent`);
  }

  onHeaderSubscribe() {
    this.subscriptionService.onSubscribeClicked("Quaterly")
  }

  selectHomeOnClick() {
    this.selectedComponent = 'home';
  }

  selectAdminOnClick() {
    this.selectedComponent = 'admin';
  }

}
