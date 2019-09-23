import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCardItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCardItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
        )
)

export const selectCardHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)