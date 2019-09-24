export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]

}

export const removeSingleItem = (cartItems, cartItemToRemove) => {
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id && cartItem.quantity > 1 ?
            { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}