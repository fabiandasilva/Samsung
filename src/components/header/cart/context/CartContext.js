import React, { createContext, Fragment, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
   const [items, setCartList] = useState([]);

   const addToCart = (item) => {
      const onTheCart = items.find((prod) => prod.id === item.id);
      if (onTheCart) {
         setCartList(
            items.map((prod) =>
               prod.id === item.id
                  ? {
                       ...onTheCart,
                       cantidad: onTheCart.cantidad + item.cantidad,
                    }
                  : prod
            )
         );
      } else {
         setCartList([...items, item]);
      }
   };

   function itemsPrice() {
      items.reduce((p, c) => p + c.price * c.cantidad, 0);
   }

   function removeItemCart(id) {
      const newCart = items.filter((prod) => prod.id !== id);
      setCartList(newCart);
   }

   const removeCart = () => {
      setCartList([]);
   };

   return (
      <Fragment>
         <CartContext.Provider
            value={{
               items,
               itemsPrice,
               addToCart,
               removeCart,
               removeItemCart,
            }}
         >
            {children}
         </CartContext.Provider>
      </Fragment>
   );
}

export default CartContextProvider;
