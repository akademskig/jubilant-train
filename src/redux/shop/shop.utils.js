
class ShopMap {
    constructor(shopData) {
        shopData.map((sd) => this[sd.routeName] = sd.id)
    }
}

export default ShopMap