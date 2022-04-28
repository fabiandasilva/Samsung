import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
   return (
      <article className="samsung__card">
         <div className="container__img">
            <img src={producto.image} alt="" className="samsumg__img" />
         </div>
         <span className="samsung__name">{`${producto.title}`}</span>
         <span className="samsung__price">$ {`${producto.price}`}</span>
         <button class="learn-more">
            <span class="circle" aria-hidden="true">
               <span class="icon arrow"></span>
            </span>
            <span class="button-text">
               <Link to={`/detalle/${producto.id}`} className="padding">Comprar</Link>
            </span>
         </button>
      </article>
   );
}

export default Item;
