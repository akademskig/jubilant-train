
import CardActionTypes from "./cart.types"

export const toggleCartDrowpdown = () => ({
    type: CardActionTypes.TOGGLE_CART_DROPDOWN,
})

export const addItemToCart = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})