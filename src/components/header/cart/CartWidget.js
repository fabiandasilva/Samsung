import React from "react";
import { useCartContext } from "./context/CartContext";
import { FaShoppingBag } from 'react-icons/fa';

function CartWidget() {
   const { cartList } = useCartContext();
   let itemInCart = 0;

   cartList.map((item) => {
      itemInCart += item.cantidad;
   });
   return (
      <div>
         <FaShoppingBag />
         {cartList.length === 0 ? " " : itemInCart}
      </div>
   );
}

export default CartWidget;
