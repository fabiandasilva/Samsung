import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getFirestoreApp } from "./components/firebase/Config";
import Header from "./components/header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

getFirestoreApp();
root.render(
   <React.StrictMode>
      <Header/>
      <App />
   </React.StrictMode>
);
