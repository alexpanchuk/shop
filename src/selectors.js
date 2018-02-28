import * as R from "ramda";

export const getPhoneById = ({ phones }, id) => R.prop(id, phones);

export const getPhones = state =>
  R.map(id => getPhoneById(state, id), state.phonesPage.ids);

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids);

export const getTotalBasketCount = state => R.length(state.basket);

// export const getTotalBasketPrice = state => {
//   const totalPrice = R.pipe(
//     R.map(id => getPhoneById(state, id)),
//     R.pluck("price"),
//     R.sum
//   )(state.basket);

//   return totalPrice;
// };

export const getTotalBasketPrice = state =>
  state.basket.reduce((sum, id) => sum + state.phones[id].price, 0);
