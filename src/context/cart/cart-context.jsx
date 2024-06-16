// import { createContext } from 'react';

// const CartContext = createContext({
//   items: [],
//   cartIsReady: false,
//   checkInventory: true,
// });

// export default CartContext;

import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  cartIsReady: false,
  checkInventory: true,
  getCart: () => {}, // Initialize getCart as an empty function
});

export default CartContext;
