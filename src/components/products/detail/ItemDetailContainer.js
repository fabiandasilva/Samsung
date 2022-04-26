import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
   const [producto, setProducto] = useState({});
   const [loading, setLoading] = useState(true);
   const { detalleId } = useParams();

   useEffect(() => {
      const querydb = getFirestore();
      const queryProd = doc(querydb, "samsungDb", detalleId);

      getDoc(queryProd)
         .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   });
   console.log(producto);
   return (
      <div className="container">
         {loading ? <h1>Cargando..</h1> : <ItemDetail producto={producto} />}
      </div>
   );
}

export default ItemDetailContainer;
