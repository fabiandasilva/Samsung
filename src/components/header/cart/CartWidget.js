import React from "react";
import { useCartContext } from "./context/CartContext";
 

function CartWidget() {
   const { cartList } = useCartContext();
   let itemInCart = 0;

   cartList.map((item) => {
      itemInCart += item.cantidad;
   });
   return (
      <div>
         {cartList.length === 0 ? " " : itemInCart}
         <img
            src="https://i.ibb.co/NVdx5ry/cart-shopping-solid.png"
            alt="cart-shopping-solid"
            border="0"
            className="icon--logo"
         />
      </div>
   );
}

export default CartWidget;
