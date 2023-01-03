import { applyMiddleware, combineReducers, createStore } from "redux";
import { CoursesReducer } from "../redux/reducer/courseReucer";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  CoursesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
