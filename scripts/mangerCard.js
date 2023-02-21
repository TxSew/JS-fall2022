class CardItem {
  id;
  image;
  title;
  price;
  quantity;
  constructor(id, image, title, price, quantity) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.price = price;
    this.quality = quantity;
  }
}
class CardManger {
  carts;
  constructor() {
    this.carts = [];
  }
  add(item) {
    if (this.carts.length) {
      // kt
      const vt = this.carts.findIndex((card) => card.id === item.id);
      if (vt === -1) {
        this.carts.push(item);
        return;
      }
      this.carts[index].quality += 1;
    } else {
      this.carts.push(item);
    }
  }
  decreaseQuantity(id) {
    const index = this.carts.findIndex((card) => card.id === item.id);
    if (this.carts[item].quantity) this.carts[index] += 1;
  }
  remove(id) {
   return this.carts = this.carts.filter((card) => card.id !== id);
  }
  getTotal() {
    return  this.carts.reduce((card , currentValue) => card + currentValue.price * currentValue.quantity,0)
  }
   
}
 export default CardManger