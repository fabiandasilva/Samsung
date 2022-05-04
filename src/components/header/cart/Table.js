import React from "react";
import { CgTrash, CgTrashEmpty } from "react-icons/cg";
import { useCartContext } from "./context/CartContext";

const Table = () => {
   const { items, removeCart, removeItemCart } = useCartContext();
   return (
      <div className="container__info">
         <table className="order">
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
               {items.map((prod) => (
                  <tr key={prod.id}>
                     <td className="table__head">
                        <img src={prod.image} alt={prod.title} />
                     </td>
                     <td className="table__head text-center">{prod.title}</td>
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
                  <td>
                     $
                     {items
                        .reduce((p, c) => p + c.price * c.cantidad, 0)
                        .toFixed(3)}
                  </td>
               </tr>
            </tfoot>
         </table>
      </div>
   );
};

export default Table;
