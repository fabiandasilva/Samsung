import {
   collection,
   getDocs,
   getFirestore,
   query,
   where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

function ItemListContainer() {
   const [productos, setProductos] = useState([]);
   const [loading, setLoading] = useState(true);
   const { categoriaId } = useParams();
   useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "contenedorProductos");

      if (categoriaId) {
         const queryFilter = query(
            queryCollection,
            where("categoria", "==", categoriaId)
         );

         getDocs(queryFilter)
            .then((resp) =>
               setProductos(
                  resp.docs.map((item) => ({ id: item.id, ...item.data() }))
               )
            )
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
      } else {
         getDocs(queryCollection)
            .then((resp) =>
               setProductos(
                  resp.docs.map((item) => ({ id: item.id, ...item.data() }))
               )
            )
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
      }
   }, [categoriaId]);

   console.log(productos);

   return (
      <div className="container">
         {loading ? (
            <Loading />
         ) : (
            <div
               style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
               }}
            >
               <ItemList productos={productos} />
            </div>
         )}
      </div>
   );
}

export default ItemListContainer;
