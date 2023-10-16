import { Burger } from "../models/Burger.js";

export const FakeDb = {
  burgers: [
    new Burger({
      id: '1',
      name: 'double',
      topping: 'ketchup, mayo, cheese, pickles',
      price: 4.45
    }),
    new Burger({
      id: '2',
      name: 'single',
      topping: 'ketchup, mayo, cheese, pickles',
      price: 2.50
    })
  ]
}

