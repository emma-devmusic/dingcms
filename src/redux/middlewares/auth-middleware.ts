import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { auth, authCMS } from "../../services/auth";
import { setIsLoading } from "../slice/uiSlice";
import { setAuth } from "../slice/authSlice";
import { AuthState } from "../../types/store";
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'auth/login') {
            state.dispatch( setIsLoading(true) )
            try {
                const userCredential: any = await signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        Swal.fire(`Error ! ${errorCode}`, `${errorMessage}`, 'error')
                    });

                if (userCredential) {
                    sessionStorage.setItem('accessToken', userCredential.user.accessToken)
                    state.dispatch(
                        setAuth({
                            uid: userCredential.user.uid,
                            email: userCredential.user.email,
                            name: userCredential.user.displayName
                        }))
                    Swal.fire(`Ingresando`, `Autenticación Exitosa`, 'success')
                }
            } catch (error) {
                console.log(error)
            }
            state.dispatch(setIsLoading(false))
        }
    }
}