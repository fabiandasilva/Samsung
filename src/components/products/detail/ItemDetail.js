import { useState } from "react";
import { Carousel } from "react-bootstrap";
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
      <div className="row justify-content-end">
         <div className="col-md-6">
            <Carousel>
               <Carousel.Item>
                  <img
                     className="d-block w-50"
                     src={producto.image}
                     alt="First slide"
                     height="684px" width="587px"
                  />
                  
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-50"
                     src={producto.image}
                     alt="Second slide"
                  />

                  
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-50"
                     src={producto.image}
                     alt="Third slide"
                  />

                  
               </Carousel.Item>
            </Carousel>
          
         </div>
         <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
               {producto.categoria}
            </h4>
            <h1 className="display-5 text-uppercase fw-bold">{producto.title} </h1>
            <h3 className="display-6 fw-bold my-4">${producto.price}</h3>
            <p className="lead">Stock: {producto.stock}</p>
            <p className="lead text-black-50">{producto.description}</p>
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
      </div>
   );
};

export default ItemDetail;
