import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
            <ToastContainer
               position="top-center"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark"
            />
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
