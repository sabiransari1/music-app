import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authentication } from "./authentication/reducer";
import { music } from "./music/reducer";

const rootReducer = combineReducers({
  authentication,
  music,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
