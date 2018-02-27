import * as R from "ramda";

export const getPhoneById = ({ phones }, id) => R.prop(id, phones);

export const getPhones = state =>
  R.map(id => getPhoneById(state, id), state.phonesPage.ids);

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids);
