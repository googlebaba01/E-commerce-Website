
//Initializing  REDUX STORE


import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"
import { productDetailsReducer, productReducer } from "./Redux_Reducers/ProductReducer";



import{userReducer,userUpdateProfile,forgetPasswordReducer} from "./Redux_Reducers/UserReducer"

const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    loginUser:userReducer,
    UpdateUser:userUpdateProfile,
    forgetPassword:forgetPasswordReducer

});

let initailState ={};

const middleware = [thunk]

const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;