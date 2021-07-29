import { createSelector } from "@ngrx/store";
import { AppState } from "../models/app.state";
import { CartState } from "../reducers/cart.reducer";

export const selectCart = (state: AppState) => state.cartState;


export const selectCartAmount = createSelector(
    selectCart,
    (state: CartState) => state.amount
  );


export const selectCartTotalItems = createSelector(
    selectCart,
    (state: CartState) => state.totalItems
  );


export const selectCartItems = createSelector(
    selectCart,
    (state: CartState) => state.items
  );