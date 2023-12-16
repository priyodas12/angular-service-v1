import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribeClicked(customerType: string) {
    alert(`Thank you for ${customerType} subscription!You will be enjoying service!`)
  }
}
