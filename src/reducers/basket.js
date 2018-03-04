import R from "ramda";

import {
  ADD_PHONE_TO_BASKET,
  REMOVE_PHONE_FROM_BASKET,
  CLEAN_BASKET,
  BASKET_CHECKOUT
} from "../actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return R.append(payload, state);
    case REMOVE_PHONE_FROM_BASKET:
      return R.filter(id => id !== payload, state);
    case CLEAN_BASKET:
      return [];
    case BASKET_CHECKOUT:
      alert(`CHECKKOUT: ${JSON.stringify(payload)}`);
      return [];
    default:
      return state;
  }
};
