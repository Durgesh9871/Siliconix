import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { orderReducer } from "./Admin_Product/reducer";
import { productReduer } from "./Product_Reducer/reducer";
import { LaptopReducer } from "./Laptop_reducer/reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  order: orderReducer,
  product : productReduer ,
  LaptopReducer:LaptopReducer , 
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
