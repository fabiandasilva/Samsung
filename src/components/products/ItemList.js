import React, { Fragment } from "react";
import Item from "./Item";

function ItemList({ products }) {
   return (
      <Fragment>
         {products.map((products) => (
            <Item key={products.id} products={products} />
         ))}
      </Fragment>
   );
}

export default ItemList;
