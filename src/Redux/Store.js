import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { thunk } from "redux-thunk";

import { Reducer as userReducer } from "./Reducer";

const root = combineReducers({
  users: userReducer,
});

export const myStore = legacy_createStore(root, applyMiddleware(thunk));
