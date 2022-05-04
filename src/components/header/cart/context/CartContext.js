import React, { createContext, Fragment, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
   const [cartList, setCartList] = useState([]);

   const addToCart = (item) => {
      const onTheCart = cartList.find((prod) => prod.id === item.id);
      if (onTheCart) {
         setCartList(
            cartList.map((prod) =>
               prod.id === item.id
                  ? {
                       ...onTheCart,
                       cantidad: onTheCart.cantidad + item.cantidad,
                    }
                  : prod
            )
         );
      } else {
         setCartList([...cartList, item]);
      }
   };

   function itemsPrice() {
      
      cartList.reduce((p, c) => p + c.price * c.cantidad, 0);
   }

   function removeItemCart(id) {
      
      const newCart = cartList.filter((prod) => prod.id !== id);
      setCartList(newCart);
   }

   const removeCart = () => {
      
      setCartList([]);
   };

   return (
      <Fragment>
         <CartContext.Provider
            value={{
               cartList,
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
