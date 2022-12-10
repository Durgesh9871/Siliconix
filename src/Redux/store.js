import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./Auth_Reducer/reducer";
import { orderReducer } from "./Orders_Reducer/reducer";
import { productReduer } from "./Product_Reducer/reducer";
import { savedReducer } from "./Saved_Reducer/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  order : orderReducer,
  product : productReduer,
  saved : savedReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
