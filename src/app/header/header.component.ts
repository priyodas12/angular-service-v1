import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  onHeaderSubscribe() {
    let subscribeService = new SubscribeService();
    subscribeService.onSubscribeClicked('Monthly');
  }

}
