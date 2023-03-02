//  *  array quản lý post
//  */
import { getAll   } from "./services/categoryServices.js";

 const USER_PRODUCT ="user_product"
class ManagerCategory {
  constructor(category) {
    this.category = category;
  }
  static async getAll() {
    const data = await getAll();
    this.category = data;
  }
  // tạo trường tạo Course
  static async create(title, thumbnail , description,price) {
    console.log("isProduct , is call");
    const data = await postData(title, thumbnail, description,price);
    console.log("data", data.length);
    if (data.length > 0) {
      ManagerProduct.saveProductData(data[0]);
      return true;
    }
    return false;
  }
  static saveProductData(data) {
    localStorage.setItem(USER_PRODUCT, JSON.stringify(data));
  } 
  // static register = (product) => {
  //   this.products.push(product);
  // }
}

export default ManagerCategory;
