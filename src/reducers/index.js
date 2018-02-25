import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import phones from "./phones";

export default combineReducers({
  routing: routerReducer,
  phones
});
