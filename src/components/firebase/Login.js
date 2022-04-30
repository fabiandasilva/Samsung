import "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { getFirestoreApp } from "./Config";

const auth = getAuth(getFirestoreApp());

function Login() {
   const firestore = getFirestore(getFirestoreApp());
   const [isRegistrando, setIsRegistrando] = useState(false);

   async function registrarUsuario(email, password) {
      const infoUsuario = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      ).then((usuarioFirebase) => {
         return usuarioFirebase;
      });

      console.log(infoUsuario);
      const docuRef = doc(firestore, "usuarios");
      setDoc(docuRef, { correo: email, contraseña: password });
   }
   function submitHandler(e) {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      console.log(email, password);

      if (isRegistrando) {
         // Registrando
         registrarUsuario(email, password);
      } else {
         //login
         signInWithEmailAndPassword(auth, email, password)
      }
   }

   return (
      <div>
         <h1>{isRegistrando ? "registrate" : "inicia sesion"}</h1>
         <form onSubmit={submitHandler}>
            <label>Correo electronico</label>
            <input type="email" id="email" />
            <br />
            <label>Contraseña</label>
            <input type="contraseña" id="password" />
            <br />
            <input
               type="submit"
               value={isRegistrando ? "Registrar" : "Iniciar sesion"}
            />
         </form>
         <button onClick={() => setIsRegistrando(!isRegistrando)}>
            {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
         </button>
      </div>
   );
}

export default Login;
