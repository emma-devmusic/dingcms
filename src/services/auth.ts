import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { app } from "./firebase";

export const auth = getAuth(app);

export const authCMS = async (email: string, password: string) => {

    const userCredential: any = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire(`Error ! ${errorCode}`, `${errorMessage}`, 'error')
        });

    if (userCredential) {
        Swal.fire(`Ingresando`, `Autenticación Exitosa`, 'success')
        console.log(userCredential.user)
        sessionStorage.setItem('accessToken', userCredential.user.accessToken )
    }
}




