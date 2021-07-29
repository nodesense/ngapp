
// default state if initial state is not given
// state is subset of store
// store contains multiple states

import { CartItem } from "src/app/shared/models/cart-item";
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from "../action.types";
import { AddItemToCart, EmptyCart, RemoveItemFromCart } from "../actions/cart.actions";

export interface CartState {
    items: CartItem[];
    amount: number;
    totalItems: number;
}

const INITIAL_STATE : CartState = {
    items: [],
    amount: 0,
    totalItems: 0
}

// pure functions
// given same input, return same output
// immutable priciples
export function cartReducer(state: CartState = INITIAL_STATE, action: AddItemToCart | RemoveItemFromCart | EmptyCart):CartState {

    switch (action.type) {
        case CART_ADD_ITEM: {
            const newState = {
                amount: state.amount + action.item.price * action.item.qty,
                totalItems: state.totalItems + action.item.qty,
                items: [...state.items, action.item]
            }

            return newState;
        } 
        case CART_REMOVE_ITEM: {
            const items =  state.items.filter( item => item.id != action.id)
           
            let amount = 0, totalItems = 0
            for (let item of  items) {
                amount += item.price * item.qty;
                totalItems += item.qty
            }

            return {
                items,
                amount,
                totalItems
            }

        } 
        case CART_EMPTY: {
            return {
                items: [],
                amount: 0,
                totalItems: 0
            }
        } 
        default: 
        return state;
    }

}