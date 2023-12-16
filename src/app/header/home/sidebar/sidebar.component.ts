import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']

})
export class SidebarComponent {

  constructor(private subscriptService: SubscribeService) {
    console.log('SidebarComponent Subscription! ' + subscriptService);
  }

  onSubscribeSidebar() {
    this.subscriptService.onSubscribeClicked("Yearly");
  }
}
