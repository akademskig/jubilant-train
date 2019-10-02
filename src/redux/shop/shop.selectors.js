import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collection => Object.keys(collection).map(key => collection[key])
)
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollection],
        collection =>
            collection[collectionUrlParam]
    )