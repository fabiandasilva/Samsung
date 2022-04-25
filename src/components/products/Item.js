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
        {/*  <div className="samsung__colors">
            <span className="samsung__color--black" />
            <span className="samsung__color--blue" />
            <span className="samsung__color--peach" />
         </div> */}
         <button className="learn-more">
            <span className="circle" aria-hidden="true">
               <span className="icon arrow" />
            </span>
            <span className="button-text">
               <Link to={`/detalle/${producto.id}`}>Comprar</Link>
            </span>
         </button>
         
      </article>
   );
}

export default Item;
