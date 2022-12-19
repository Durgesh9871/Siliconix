
import {applyMiddleware, legacy_createStore} from "redux" 
import { LaptopReducer } from "./Laptop_reducer/reducer"
import thunk from "redux-thunk"
 

const store = legacy_createStore(LaptopReducer ,applyMiddleware(thunk))

export {store}