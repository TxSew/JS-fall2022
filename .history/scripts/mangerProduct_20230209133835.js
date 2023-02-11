//  *  array quản lý post
//  */
import { getAll, searchProduct } from "./services/productServices.js";

class ManagerProduct {
  constructor(products) {
    this.products = products;
  }
  static async getAll() {
    const data = await getAll();
    this.products = data;
  }
  static async searchProduct(keyword) {
    const data = await searchProduct({
      title_like: keyword,
    });
    this.products = data;
  }
}

export default ManagerProduct;
