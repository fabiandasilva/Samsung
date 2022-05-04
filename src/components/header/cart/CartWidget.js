import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useCartContext } from "./context/CartContext";

function CartWidget() {
   const { items } = useCartContext();
   let itemInCart = 0;

   items.map((item) => {
      itemInCart += item.cantidad;
   });
   return (
      <div>
         <FaShoppingBag />
         {items.length === 0 ? " " : itemInCart}
      </div>
   );
}

export default CartWidget;
