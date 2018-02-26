import phones from "./mockPhones";

export const fetchPhones = async () => Promise.resolve(phones);
export const loadMorePhones = async ({ offset }) => Promise.resolve(phones);
