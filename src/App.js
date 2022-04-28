import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/header/cart/Cart";
import CartContextProvider from "./components/header/cart/context/CartContext";
import NavBar from "./components/header/NavBar";
import ItemDetailContainer from "./components/products/detail/ItemDetailContainer";
import ItemListContainer from "./components/products/ItemListContainer";
import "./sass/main.scss";

function App() {
   return (
      <BrowserRouter>
         <CartContextProvider>
            <NavBar />
            <Routes>
               <Route path="/" element={<ItemListContainer />} />
               <Route path="/cart" element={<Cart />} />
               <Route
                  path="/categoria/:categoriaId"
                  element={<ItemListContainer />}
               />
               <Route
                  path="/detalle/:detalleId"
                  element={<ItemDetailContainer />}
               />
            </Routes>
         </CartContextProvider>
      </BrowserRouter>
   );
}

export default App;
