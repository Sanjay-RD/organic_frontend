import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/loginReducer";
import {
  listProductReducer,
  listProductsReducer,
  productAddReducer,
} from "./reducers/productReducer";
import { productAddToCartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  listProduct: listProductReducer,
  listProducts: listProductsReducer,
  productAdd: productAddReducer,
  productAddToCart: productAddToCartReducer,
});

const userInfoFromStrorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStrorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
