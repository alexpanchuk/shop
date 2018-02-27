import * as R from "ramda";
import phones from "./mockPhones";

export const fetchPhones = async () => Promise.resolve(phones);
export const loadMorePhones = async ({ offset }) => Promise.resolve(phones);
export const fetchPhoneById = async id => {
  const phone = R.find(R.propEq("id", id), phones);
  return Promise.resolve(phone);
};
