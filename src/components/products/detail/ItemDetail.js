import React, { Fragment, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../../header/cart/context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({ products }) => {
   const [isShowCount, setIsShowCount] = useState(true);

   const { addToCart } = useCartContext();

   const onAdd = (qty) => {
      setIsShowCount(false);
      toast.success(`${products.title} agregado al carrito`);
      addToCart({ ...products, cantidad: qty });
   };

   return (
      <div className="row justify-content-end align-items-center">
         <div className="col-md-6">
            <Carousel>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={products.slide02}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={products.slide01}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={products.slide03}
                     alt="Third slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={products.slide04}
                     alt="Four slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={products.slide05}
                     alt="Five slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>
         <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
               {products.categoria}
            </h4>
            <h1 className="display-5 text-uppercase fw-bold">
               {products.title}{" "}
            </h1>
            <h3 className="display-6 fw-bold my-4">${products.price}</h3>
            <p className="lead">Stock: {products.stock}</p>
            <p className="lead text-black-50">{products.description}</p>
            {isShowCount ? (
               <ItemCount stock={products.stock} onAdd={onAdd} initial={1} />
            ) : (
               <Fragment>
                  <Link to="/cart">
                     <button className="btn__form">Terminar mi compra</button>
                  </Link>
                  <Link to="/">
                     <button className="btn__form">Seguir comprando </button>
                  </Link>
               </Fragment>
            )}
         </div>
      </div>
   );
};

export default ItemDetail;
