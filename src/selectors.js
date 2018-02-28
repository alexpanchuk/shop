import * as R from "ramda";

export const getPhoneById = ({ phones }, id) => R.prop(id, phones);

export const getPhones = state => {
  const applySearch = phone =>
    R.pipe(
      R.prop("name"),
      R.toLower,
      R.contains(R.toLower(state.phonesPage.search))
    )(phone);

  const phones = R.compose(
    R.filter(applySearch),
    R.map(id => getPhoneById(state, id))
  )(state.phonesPage.ids);

  return phones;
};

// export const getPhones = state => {
//   const phones = state.phonesPage.ids.map(id => state.phones[id]);
//   const searchString = state.phonesPage.search.toLowerCase();
//   const searchedPhones = phones.filter(phone =>
//     phone.name.toLowerCase().includes(searchString)
//   );
//   return searchedPhones;
// };

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
