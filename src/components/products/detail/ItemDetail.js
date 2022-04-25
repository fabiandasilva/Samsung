import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../../header/cart/context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({ producto }) => {
   const [isShowCount, setIsShowCount] = useState(true);

   const { addToCart } = useCartContext();

   const onAdd = (qty) => {
      setIsShowCount(false);
      toast.success(`Has agregado ${qty} productos al carrito`);
      addToCart({ ...producto, cantidad: qty });
      console.log(qty);
   };

   return (
      <>
         <section className="product">
            <div className="product__container bd-grid">
               <div className="product__details">
                  <div className="galeria__preview">
                     <img src={producto.image} alt="" />
                  </div>
               </div>
               <div className="detalle__producto">
                  <h2 className="producto__nombre">{producto.title}</h2>
                  <p className="producto__descripcion"></p>
                  <p className="producto__stock">Stock: {producto.stock}</p>
                  <p className="producto__precio">Precio: ${producto.price}</p>
               </div>

               {isShowCount ? (
                  <ItemCount stock={producto.stock} onAdd={onAdd} initial={1} />
               ) : (
                  <>
                     <Link to="/cart">
                        <button className="button-primary p-1">
                           Terminar mi compra
                        </button>
                     </Link>
                     <Link to="/">
                        <button className="button-primary">
                           Seguir comprando{" "}
                        </button>
                     </Link>
                  </>
               )}
            </div>
         </section>
      </>
   );
};

export default ItemDetail;
