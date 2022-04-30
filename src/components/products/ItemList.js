import React, { Fragment } from "react";
import Item from "./Item";

function ItemList({ productos }) {
   return (
      <Fragment>
         {productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
         ))}
      </Fragment>
   );
}

export default ItemList;
