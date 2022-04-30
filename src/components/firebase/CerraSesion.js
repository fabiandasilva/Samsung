import { Button } from "bootstrap";
import { getAuth, singOut } from "firebase/auth";

import { ImUser } from "react-icons/im";
import React from "react";
import { getFirestoreApp } from "./Config";
const auth = getAuth(getFirestoreApp());
function CerraSesion() {
   return (
      <div>
         <Button onClick={() => singOut(auth)}>
            <ImUser />
         </Button>
      </div>
   );
}

export default CerraSesion;
