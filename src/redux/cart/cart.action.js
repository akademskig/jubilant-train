
import CardActionTypes from "./cart.types"

export const toggleCartDrowpdown = () => ({
    type: CardActionTypes.TOGGLE_CART_DROPDOWN,
})

export const addItemToCart = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CardActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeSingleItem = item => ({
    type: CardActionTypes.REMOVE_SINGLE_ITEM,
    payload: item
})