import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../../firebase/Login";
import Footer from "../../footer/Footer";
import { useCartContext } from "./context/CartContext";

function Cart() {
   const { cartList, removeCart, removeItemCart } = useCartContext();

   const generarOrden = () => {
      let orden = {
         buyer: {
            name: "Fabian",
            phone: "123456",
            email: "correofalso@gmail.com",
         },

         items: cartList.map((cartItem) => {
            const id = cartItem.id;
            const title = cartItem.title;
            const price = cartItem.price;
            const cantidad = cartItem.cantidad;

            return { id, title, price, cantidad };
         }),
         total: cartList.reduce((p, c) => p + c.price * c.cantidad, 0),
      };

      const db = getFirestore();
      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, orden)
         .then((result) => {
            console.log(result);
            return result;
         })
         .then((result) => <p>{result.id}Orden generada</p>)
         .catch((err) => console.log(err))
         .finally(() => removeCart());
      console.log(orden);
   };

   return (
      <div>
         {cartList.length === 0 ? (
            <div>
               El carrito esta vacío
               <br />
               <Link to="/">
                  <Button>Ver productos</Button>
               </Link>
            </div>
         ) : (
            <Fragment>
               {cartList.map((prod) => (
                  <li key={prod.id}>
                     Nombre: {prod.title} - Cantidad: {prod.cantidad}{" "}
                     <Button onClick={() => removeItemCart(prod.id)}>
                        Eliminar producto
                     </Button>
                  </li>
               ))}
               {cartList.length > 0 && (
                  <Fragment>
                     <h2>
                        Total: $
                        {cartList.reduce((p, c) => p + c.price * c.cantidad, 0)}
                     </h2>
                     <button
                        className="btn btn-outline-danger"
                        onClick={removeCart}
                     >
                        Vaciar carrito
                     </button>
                     <Login />
                     <button
                        className="btn btn-outline-success"
                        onClick={generarOrden}
                     >
                        Finalizar compra
                     </button>
                     <Footer />
                  </Fragment>
               )}
            </Fragment>
         )}
      </div>
   );
}

export default Cart;
