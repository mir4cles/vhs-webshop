// src/store/reducer.js
import { combineReducers } from "redux";
import productListSliceReducer from "./productList/reducer";
import shoppingCartSliceReducer from "./shoppingCart/reducer";

const reducer = combineReducers({
	productList: productListSliceReducer,
	shoppingCart: shoppingCartSliceReducer,
	// etc.
});

export default reducer;
