import * as R from "ramda";

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS
} from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newPhones = R.indexBy(R.prop("id"), payload);
      return R.merge(state, newPhones);
    case LOAD_MORE_PHONES_SUCCESS:
      const morePhones = R.indexBy(R.prop("id"), payload);
      return R.merge(state, morePhones);
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
    default:
      return state;
  }
};
