import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
   return (
      <div className="container">
         <div className="empty__cart">
            <h1 className="empty__cart--title">TU CARRITO ESTÁ VACIO</h1>
            <p className="empty__cart--subtitle">
               Te invitamos a navegar en el sitio para que encuentres lo que
               estás buscando.
            </p>
            <br />
            <Link to="/">
               <button className="btn__empty">Ver productos</button>
            </Link>
         </div>
      </div>
      
   );
};

export default EmptyCart;
