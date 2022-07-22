import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import checkoutReducer from './reducer/checkoutReducer'

const compose = composeWithDevTools(applyMiddleware(thunk))



const state = combineReducers({ checkout: checkoutReducer })

const store = createStore(state, compose)
export default store 