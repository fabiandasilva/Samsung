import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import NavBar from "./components/header/NavBar";
import Item from "./components/products/Item";
import "./sass/main.scss";
function App() {
   return (
    
            <>
            <NavBar />
            <Header />
            <Item/>
            </>
        
   );
}

export default App;
