import {
   collection,
   getDocs,
   getFirestore,
   query,
   where
} from "firebase/firestore";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Hero from "../header/Hero";
import ItemList from "./ItemList";

function ItemListContainer() {
   const [productos, setProductos] = useState([]);
   const [loading, setLoading] = useState(true);
   const { categoriaId } = useParams();
   useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "samsungDb");

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
 

   return (
      <Fragment>
         <Hero />
         <div className="container">
            {loading ? (
               <h1 className="text-center">Cargando productos..</h1>
            ) : (
               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     flexWrap: "wrap",
                     alignItems: "flex-end",
                     justifyContent: "center",
                  }}
               >
                  <ItemList productos={productos} />
               </div>
            )}
         </div> 
         <Footer/>
      </Fragment>
   );
}

export default ItemListContainer;
