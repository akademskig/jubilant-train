const INITIAL_STATE = {
    sections: [
        {
            "title": "jackets",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 1,
            "link": "jackets"
        },
        {
            "title": "pants",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 2,
            "link": "pants"
        },
        {
            "title": "mens",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 3,
            "link": "mens"
        },
        {
            "title": "womens",
            "imageUrl": "https://picsum.photos/id/:imageId/200",
            "id": 4,
            "size": "large",
            "link": "womens"
        },
        {
            "title": "sneakers",
            "imageUrl": "https://picsum.photos/id/251/200",
            "id": 5,
            "size": "large",
            "link": "sneakers"
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