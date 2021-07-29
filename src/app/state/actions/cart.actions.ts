import { Action } from "@ngrx/store";
import { CartItem } from "src/app/shared/models/cart-item";
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from "../action.types";

export class AddItemToCart implements Action {
    readonly type = CART_ADD_ITEM;
    // Item is payload
    constructor(public item: CartItem) {}
  }

  export class RemoveItemFromCart implements Action {
    readonly type = CART_REMOVE_ITEM;
    // Item is payload
    constructor(public id: number) {}
  }


  export class EmptyCart implements Action {
    readonly type = CART_EMPTY;
    // Item is payload
    constructor() {}
  }