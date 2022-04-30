import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useCartContext } from "./context/CartContext";

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
