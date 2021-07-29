import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart-item';
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from 'src/app/state/action.types';
import { AddItemToCart, EmptyCart, RemoveItemFromCart } from 'src/app/state/actions/cart.actions';
import { CartState } from 'src/app/state/reducers/cart.reducer';
import { selectCartAmount, selectCartItems, selectCartTotalItems } from 'src/app/state/selectors/cart.selectors';

// subscribe/publish dispatch
@Component({
  selector: 'app-ngrx-cart',
  templateUrl: './ngrx-cart.component.html',
  styleUrls: ['./ngrx-cart.component.css']
})
export class NgrxCartComponent implements OnInit {

  amount$: Observable<number>;
  totalItems$: Observable<number>;
  items$: Observable<CartItem[]>;

  cartState$ : Observable<CartState>

  constructor(private store: Store<{ cartState: CartState }>) {
    // select an object, if any property got change, anywhere with in 
    // object, nested object, array, properties, cartState will receive
    // notification
      this.cartState$ = this.store.select('cartState')


      // some times, we don't all objects change
      // i only want amount??\
      // ngRx Feature Selector

      // this amount#$ subcribe caleld only if amount is changed
      this.amount$ = this.store.select(selectCartAmount)
      this.totalItems$ = this.store.select(selectCartTotalItems)
      this.items$ = this.store.select(selectCartItems)


   }

  ngOnInit(): void {
  }

  addItem() {
      const id = Math.ceil(Math.random() * 100000);
   
      const item: CartItem = new CartItem(
                                  id,
                                  `Product ${id}`,
                                  100 + Math.ceil(Math.random() * 50),
                                  1 + Math.ceil(Math.random() * 5)
                              )

      // action {type, payload: any}
      // action  spec {type:addNumbers, payload{a, b}}
      // action spec {type:emptyCart no payload}
      // action spec {type:removeItem payload{id}  }
      // action spec {type:addItem paylaod{item} }
      // const action = {
      //   type: CART_ADD_ITEM,
      //   item
      // }

      // // dispatch, shall call the reducer with action, 
      //              // reduce returns new state
      //              // dispatch shall update the store

      // this.store.dispatch(action)

      // Using Action/creators
      this.store.dispatch(new AddItemToCart(item))
  }

  removeItem(id) {
    // const action = {
    //   type: CART_REMOVE_ITEM,
    //   id
    // }
    // this.store.dispatch(action)

    // Using Action/creators
    this.store.dispatch(new RemoveItemFromCart(id))
  }

  empty() {
    //this.store.dispatch({type: CART_EMPTY})

      // Using Action/creators
      this.store.dispatch(new EmptyCart())
  }

}
