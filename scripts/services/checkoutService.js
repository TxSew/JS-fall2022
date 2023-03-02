import { fetchCheckout } from "../api/index.js";
/**
 * getAll
 * getDetail
 * create
 * update
 * delete
 */

export const getcheckout = async () => {
  return await fetchCheckout("checkout");
};
