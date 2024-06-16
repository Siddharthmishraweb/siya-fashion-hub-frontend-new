import { useContext } from 'react';

import CartContext from '../context/cart/cart-context';

export const useCartContext = () => {
  const context = useContext(CartContext);

  // console.log("context:::  ", context);

  if (!context) {
    throw Error('useCartContext must be inside CartProvider');
  }

  return context;
};
