import { fetchProduct } from "../api/index.js";
/**
 * getAll
 * getDetail
 * create
 * update
 * delete
 */

export const getAll = async () => {
  return fetchProduct("products?_sort=title&_order=desc");
};
// kiểm tra empty object
const isEmpty = (value) => {
  return Object.keys(value).length === 0;
};
export const sort = async () =>{
  const url = `products?_sort=id&_order=desc`
   return fetchProduct(url ,"GET")
}
export const searchProduct = async (payload = {}) => {
  const query = "?" + new URLSearchParams(payload).toString();
  return fetchProduct("products" + query);
};
export const postData = async (title, thumbnail) => {
    const url = `products?title=${title}&thumbnail=${thumbnail}`;
  return fetchProduct(url, "GET");
};
