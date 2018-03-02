import * as R from "ramda";

/**
 * return an id field of given object
 */

export const getPhoneById = ({ phones }, id) => R.prop(id, phones);

/**
 * return phones from state, applying Category filter and search string
 */

export const getPhones = (state, ownProps) => {
  const activeCategoryId = R.path(["params", "id"], ownProps);
  const applySearch = phone =>
    R.pipe(
      R.prop("name"),
      R.toLower,
      R.contains(R.toLower(state.phonesPage.search))
    )(phone);

  const applyCategory = item =>
    R.equals(activeCategoryId, R.prop("categoryId", item));

  const phones = R.pipe(
    R.map(id => getPhoneById(state, id)),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.filter(applySearch)
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

/**
 * return a length of phones on a Phones page
 */

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids);

/**
 * return a total amount of items in basket
 */

export const getTotalBasketCount = state => R.length(state.basket);

// export const getTotalBasketPrice = state => {
//   const totalPrice = R.pipe(
//     R.map(id => getPhoneById(state, id)),
//     R.pluck("price"),
//     R.sum
//   )(state.basket);

//   return totalPrice;
// };

/**
 * return a total price of all items in basket
 */

export const getTotalBasketPrice = state =>
  state.basket.reduce((sum, id) => sum + state.phones[id].price, 0);

/**
 * return a list of categories [{id, name}] from categories, hashed by id
 * {{id, name}} => [{id, name}]
 */

export const getCategories = state => R.values(state.categories);

/**
 * return an id from router params
 */

export const getActiveCategoryId = ownProps =>
  R.path(["params", "id"], ownProps);

/**
 * Return a list of phones in basket with mixed count of repeating each item
 * {[ids]} => [{...phone, count}]
 */

export const getBasketPhonesWithCount = state => {
  const uniqueIds = R.uniq(state.basket);

  const phoneCount = id =>
    R.pipe(R.filter(basketId => R.equals(id, basketId)), R.length)(
      state.basket
    );

  const phoneWithCount = phone => R.assoc("count", phoneCount(phone.id), phone);

  const phones = R.pipe(
    R.map(id => getPhoneById(state, id)),
    R.map(phoneWithCount)
  )(uniqueIds);

  return phones;
};
