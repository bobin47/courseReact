import { applyMiddleware, combineReducers, createStore } from "redux";
import { CoursesReducer } from "../redux/reducer/courseReucer";
import { UserReducer } from "../redux/reducer/loginUserReducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  CoursesReducer,
  UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
