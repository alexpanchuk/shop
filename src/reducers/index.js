import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import phones from "./phones";
import phonesPage from "./phonesPage";
import phonePage from "./phonePage";
import basket from "./basket";

export default combineReducers({
  routing: routerReducer,
  phones,
  phonesPage,
  phonePage,
  basket
});
