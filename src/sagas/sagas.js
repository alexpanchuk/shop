// import * as R from "ramda";
import { put, takeEvery, call, select } from "redux-saga/effects";
import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS
} from "../actionTypes";
import * as api from "../api/";
import { getRenderedPhonesLength } from "../selectors";

/**
 * FETCHING PHONES
 */

export function* fetchPhones(action) {
  let phones = yield call(api.fetchPhones);
  yield put({ type: FETCH_PHONES_SUCCESS, payload: phones });
}

export function* loadMorePhones(action) {
  const state = yield select();
  const offset = getRenderedPhonesLength(state);
  let phones = yield call(api.loadMorePhones, { offset });
  yield put({ type: LOAD_MORE_PHONES_SUCCESS, payload: phones });
}

export function* fetchPhoneById(action) {
  const phone = yield call(api.fetchPhoneById, action.payload);
  yield put({ type: FETCH_PHONE_BY_ID_SUCCESS, payload: phone });
}

export function* fetchCategories(action) {
  const phones = yield call(api.fetchCategories);
  yield put({ type: FETCH_CATEGORIES_SUCCESS, payload: phones });
}

export function* watchPhonesFetching() {
  yield takeEvery(FETCH_PHONES_START, fetchPhones);
  yield takeEvery(FETCH_PHONE_BY_ID_START, fetchPhoneById);
  yield takeEvery(FETCH_CATEGORIES_START, fetchCategories);
  yield takeEvery(LOAD_MORE_PHONES_START, loadMorePhones);
}

export default function* rootSaga() {
  yield watchPhonesFetching();
}
