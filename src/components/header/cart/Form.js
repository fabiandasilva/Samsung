import { addDoc, collection, getFirestore } from "firebase/firestore";
import { FcShipped } from "react-icons/fc";
import { toast } from "react-toastify";

function Form() {
   const submitOrder = (e) => {
      e.preventDefault();

      const db = getFirestore();
      const order = {
         buyer: {
            name: `${e.target[0].value}`,
            phone: e.target[1].value,
            email: e.target[2].value,
         },

         items: items.map((cartItem) => {
            const id = cartItem.id;
            const title = cartItem.title;
            const price = cartItem.price;
            const cantidad = cartItem.cantidad;

            return { id, title, price, cantidad };
         }),
         total: items.reduce((p, c) => p + c.price * c.cantidad, 0),
      };

      const queryCollection = collection(db, "orders");
      addDoc(queryCollection, order)
         .then((result) => {
            console.log(result);
            return result;
         })
         .then((result) => toast.info(`Orden de compra ${result.id}`))
         .catch((err) => console.log(err))
         .finally(() => removeCart());
   };
   return (
      <form onSubmit={submitOrder} className="form__container">
         <h3>Datos del comprador</h3>

         <input placeholder="Nombre y Apellido" type="name" name="name" />

         <input placeholder="Telefono" type="telephone" name="phone" />

         <input placeholder="Email" type="email" name="email" />
         <button type="submit">
            <div className="svg-wrapper-1">
               <div className="svg-wrapper">
                  <FcShipped />
               </div>
            </div>
            <span>Generar Orden</span>
         </button>
      </form>
   );
}

export default Form;
