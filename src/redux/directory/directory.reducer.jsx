const INITIAL_STATE = {
    sections: [
        {
            "title": "jackets",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 1,
            "link": "shop/jackets"
        },
        {
            "title": "hats",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 2,
            "link": "shop/hats"
        },
        {
            "title": "mens",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 3,
            "link": "shop/mens"
        },
        {
            "title": "womens",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 4,
            "size": "large",
            "link": "shop/womens"
        },
        {
            "title": "sneakers",
            "imageUrl": "https://picsum.photos/id/251/200",
            "id": 5,
            "size": "large",
            "link": "shop/sneakers"
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer