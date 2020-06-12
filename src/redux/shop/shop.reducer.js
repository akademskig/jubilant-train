import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    collection: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
            case ShopActionTypes.UPDATE_COLLECTIONS:
                return{
                    ...state,
                    collection: action.payload
                }
    }
}

export default shopReducer