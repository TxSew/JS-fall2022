//  *  array quản lý post
//  */
import { getcheckout } from "./services/checkoutService";

class ManagerCheckout {
  constructor(checkout) {
    this.checkout = checkout;
  }
  static async getcheckout() {
    const data = await getcheckout();
    this.checkout = data;
  }
} 
export default ManagerCheckout;
