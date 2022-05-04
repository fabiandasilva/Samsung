import React from "react";
import Footer from "../../footer/Footer";
import { useCartContext } from "./context/CartContext";
import Form from "./Form";
import EmptyCart from "./status/EmptyCart";
import Table from "./Table";

function Cart() {
   const { items } = useCartContext();
   return items.length ? (
      <React.Fragment>
         <div className="container container__info">
         <Table items={items} />
         <Form items={items} />
         </div>
         <Footer />
      </React.Fragment>
   ) : (
      <EmptyCart />
   );
}

export default Cart;
