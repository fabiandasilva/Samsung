import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { CgTrash, CgTrashEmpty } from "react-icons/cg";
import { Link } from "react-router-dom";
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
      <div className="container">
         {cartList.length === 0 ? (
            <div>
               El carrito esta vacío
               <br />
               <Link to="/">
                  <Button>Ver productos</Button>
               </Link>
            </div>
         ) : (
            <div className="order">
               <thead>
                  <tr>
                     <th> </th>
                     <th className="table__head table__head--line">Producto</th>
                     <th className="table__head table__head--line">Cantidad</th>
                     <th className="table__head table__head--line">Precio</th>
                     <th>
                        <button className="table__head--icon">
                           <CgTrashEmpty onClick={removeCart} />
                        </button>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {cartList.map((prod) => (
                     <tr key={prod.id}>
                        <td className="table__head">
                           <img src={prod.image} alt={prod.title} />
                        </td>
                        <td className="table__head text-center">
                           {prod.title}
                        </td>
                        <td className="table__head text-center">
                           {prod.cantidad}
                        </td>
                        <td className="table__head text-center">
                           $ {(prod.price * prod.cantidad).toFixed(3)}
                        </td>
                        <td className="table__head text-center">
                           <button onClick={() => removeItemCart(prod.id)}>
                              <CgTrash />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
               <tfoot>
                  <tr>
                     <td colSpan="4" className="total">
                        Total:{" "}
                     </td>
                     <td>$ 
                        {cartList
                           .reduce((p, c) => p + c.price * c.cantidad, 0)
                           .toFixed(3)}
                     </td>
                  </tr>
               </tfoot>
               {cartList.length > 0 && (
                  <Fragment className="row justify-content-end align-items-center">
                     {/*      <Login /> */}
                     <button
                        className="btn btn-outline-success"
                        onClick={generarOrden}
                     >
                        Finalizar compra
                     </button>
                  </Fragment>
               )}
            </div>
         )}
         <Footer />
      </div>
   );
}

export default Cart;
