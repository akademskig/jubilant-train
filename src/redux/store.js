import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore } from 'redux-persist'
import rootReducer from "./root.reducer"
import thunk from 'redux-thunk'

// intercepts non object actions, adds dispatch as a parameter to the functions
const middlewares = [thunk]
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)


