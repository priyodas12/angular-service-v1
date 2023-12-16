import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() {
    console.log("SubscribeService >> " + crypto.randomUUID());
  }

  onSubscribeClicked(customerType: string) {
    alert(`Thank you for ${customerType} subscription!You will be enjoying service!`)
  }

  objectUUID() {
    return crypto.randomUUID();
  }
}
