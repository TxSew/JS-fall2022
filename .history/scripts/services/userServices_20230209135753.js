import { fetchUser } from "../api/index.js";
/**
 * getAll
 * getDetail
 * create
 * update
 * delete
 */

export const LoginUser = async (username, password) => {
  // if (username === "") {
  //   return new Error("username không được trống");
  // }
  // if (password === "") {
  //   return new Error("password không được trống");
  // }
  const url = `users?username=${username}&password=${password}`;
  return fetchUser(url, "GET");
};
export const registerUser = async (username, password, email) => {
  // if (username === "") {
  //   return new Error("username không được trống");
  // }
  // if (password === "") {
  //   return new Error("password không được trống");
  // }
  const url = `users?username=${username}&password=${password}&email=${email}`;
  return fetchUser(url, "GET");
};
