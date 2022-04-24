import { createContext, useContext, useState } from "react";

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
      //ver esto
      cartList.reduce((p, c) => p + c.price * c.cantidad, 0);
   }

   function removeItemCart(id) {
      //macheo con el id y elimino ese producto
      const newCart = cartList.filter((prod) => prod.id !== id);
      setCartList(newCart);
   }

   const removeCart = () => {
      //Elimino todo el carrito
      setCartList([]);
   };

   return (
      <>
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
      </>
   );
}

export default CartContextProvider;
