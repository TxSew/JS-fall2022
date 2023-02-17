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
    this.carts = [
      {
        id: 12334,
        price: 20,
        quantity: 4,
        thumb : "https://tse4.mm.bing.net/th?id=OIF.HbVSUFEH6CBdv5XlHHmiEA&pid=Api&P=0",
        title : "Samsung F8",
      },
      {
        id: 2,
        price: 12,
        quantity: 2,
        thumb : "https://www.apple.com/v/iphone-14/d/images/overview/safety/crash_detection__erw0nogstc4m_large.jpg",
         title : "Iphone 14"
      }
    ];
  }
  add(item) {
    /* check Card 
         if card item => kt ton tai chua co => them item 
          if card co  => update lai card
         */
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