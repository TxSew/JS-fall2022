const card = [
  { name: "huy", price: 2, quantity: 4 },
  {
    name: "tu",
    price: 2,
    quantity: 3,
  },
];
 const total =card.reduce((cards, currentCard) => cards + currentCard.quantity *currentCard.price , 0)
  console.log(total)
