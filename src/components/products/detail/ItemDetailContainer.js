import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
   const [products, setproducts] = useState({});
   const [loading, setLoading] = useState(true);
   const { detalleId } = useParams();

   useEffect(() => {
      const querydb = getFirestore();
      const queryProd = doc(querydb, "samsungDb", detalleId);

      getDoc(queryProd)
         .then((resp) => setproducts({ id: resp.id, ...resp.data() }))
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   });
   return (
      <div className="container">
         {loading ? (
            <h1 className="text-center">Cargando..</h1>
         ) : (
            <ItemDetail products={products} />
         )}
         <Footer/>
      </div>
   );
}

export default ItemDetailContainer;
