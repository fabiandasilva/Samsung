import React from "react";
import { Link } from "react-router-dom";

function Item({ products }) {
   return (
      <article className="samsung__card">
         <div className="container__img">
            <img src={products.image} alt="" className="samsumg__img" />
         </div>
         <span className="samsung__name">{`${products.title}`}</span>
         <span className="samsung__price">$ {`${products.price}`}</span>
         <button className="learn-more">
            <span className="circle" aria-hidden="true">
               <span className="icon arrow"></span>
            </span>
            <span className="button-text">
               <Link to={`/detalle/${products.id}`} className="padding">Comprar</Link>
            </span>
         </button>
      </article>
   );
}

export default Item;
