import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';


import {Subject} from 'rxjs';

import {BehaviorSubject} from 'rxjs';

// 1. Business Logic
// 2. Data Sharing with components
// 3. Web service communication

@Injectable()
export class DataService {

  amount$: Subject<number>;// = new Subject();
  //amount$: BehaviorSubject<number>;
  amount: number = 0;

 
  private _total: number = 0;

  // a wrapper/observable to notify subscribers
  // Subject publish the values to subcriber only on publish using next
  // BehaviorSubject will have initial value, it also cache last known value
  // BehaviorSubject publish last known value to susbcribe as soon subscribe subscribe it
  // then use BehaviorSubject next to publish updates
  total$: Subject<number> = new BehaviorSubject(this._total)

  items: CartItem[] = [];

  constructor() { 
    console.log("Data service created");

   this.amount$ = new BehaviorSubject(this.amount);
   //this.amount$ = new Subject();
  }

  // console.log(this.total, obj.total)
  get total() { // getter
    return this._total; 
  }

  set total(value) {
    this._total = value;
    this.total$.next(this._total); // good to in setter
  }



  addItem(item: CartItem) {
    this.items.push(item);

    // this calls getter first to get value and call setter with new value
    // when setter called, the value published 
    this.total += item.qty; 
    this.amount += item.qty * item.price;

    console.log("Amount ", this.amount);

    // publish the amount, emit
    this.amount$.next(this.amount);
   

   
  }

  empty() {
    this.items = [];
    this.total = 0; // call setter and values published
    this.amount = 0;

     // publish the amount
     this.amount$.next(this.amount);
   
  }
}
