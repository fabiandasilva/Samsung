import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { Fragment } from "react";
import { CgTrash, CgTrashEmpty } from "react-icons/cg";
import { FcShipped } from "react-icons/fc";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import { useCartContext } from "./context/CartContext";
function Cart() {
   const { cartList, removeCart, removeItemCart } = useCartContext();

   const generarOrden = (e) => {
      e.preventDefault();

      const db = getFirestore();
      const order = {
         buyer: {
            name: `${e.target[0].value}`,
            phone: e.target[1].value,
            email: e.target[2].value,
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

      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, order)
         .then((result) => {
            console.log(result);
            return result;
         })
         .then((result) => alert("Anotá el id de tu compra " + result.id))
         .catch((err) => console.log(err))
         .finally(() => removeCart());
   };

   return (
      <React.Fragment>
         <div className="container">
            {cartList.length === 0 ? (
               <div className="container">
                  <div className="empty__cart">
                     <h1 className="empty__cart--title">
                        TU CARRITO ESTÁ VACIO
                     </h1>
                     <p className="empty__cart--subtitle">
                        Te invitamos a navegar en el sitio para que encuentres
                        lo que estás buscando.
                     </p>
                     <br />
                     <Link to="/">
                        <button className="btn__empty">Ver productos</button>
                     </Link>
                  </div>
               </div>
            ) : (
               <div className="container__info">
                  <table className="order">
                     <thead>
                        <tr>
                           <th> </th>
                           <th className="table__head table__head--line">
                              Producto
                           </th>
                           <th className="table__head table__head--line">
                              Cantidad
                           </th>
                           <th className="table__head table__head--line">
                              Precio
                           </th>
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
                                 <button
                                    onClick={() => removeItemCart(prod.id)}
                                 >
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
                           <td>
                              $
                              {cartList
                                 .reduce((p, c) => p + c.price * c.cantidad, 0)
                                 .toFixed(3)}
                           </td>
                        </tr>
                     </tfoot>
                  </table>
                  {cartList.length > 0 && (
                     <Fragment className="container">
                        <form
                           onSubmit={generarOrden}
                           className="form__container"
                        >
                           <h3>Datos del comprador</h3>

                           <input
                              placeholder="Nombre y Apellido"
                              type="name"
                              name="name"
                           />

                           <input
                              placeholder="Telefono"
                              type="telephone"
                              name="phone"
                           />

                           <input
                              placeholder="Email"
                              type="email"
                              name="email"
                           />
                           <button type="submit">
                              <div className="svg-wrapper-1">
                                 <div className="svg-wrapper">
                                    <FcShipped />
                                 </div>
                              </div>
                              <span>Generar Orden</span>
                           </button>
                        </form>
                     </Fragment>
                  )}
               </div>
            )}
            <Footer />
         </div>
      </React.Fragment>
   );
}

export default Cart;
