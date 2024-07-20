import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { app } from "./firebase";

export const auth: Auth = getAuth(app);

export const authInDataBase = async (email: string, password: string) => {


    const userCredential: any  = await signInWithEmailAndPassword(auth, email, password) 
        .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire(`Error ! ${errorCode}`, `${errorMessage}`, 'error')
        });

    if (userCredential) {
        Swal.fire(`Ingresando`, `Autenticación Exitosa`, 'success')
        return userCredential 
    }
    
}





