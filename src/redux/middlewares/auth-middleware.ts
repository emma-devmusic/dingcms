import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../services/auth";
import { setIsLoading } from "../slice/uiSlice";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { blogsClear } from "../slice/blogsSlice";
import { entitiesClear } from "../slice/entitySlice";

export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'auth/login') {
            state.dispatch(setIsLoading(true))
            signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                .then(() => {})
                .catch(() => Swal.fire('Error', 'Hubo un error al iniciar sesión', 'error'))
                .finally(() => state.dispatch(setIsLoading(false)))
        }

        if (action.type === 'auth/logout') {
            state.dispatch(setIsLoading(true))
            signOut(auth)
                .then(() => {
                    state.dispatch(blogsClear())
                    state.dispatch(entitiesClear())
                    localStorage.removeItem('entity-selected')
                })
                .catch(() => Swal.fire('Error', 'Hubo un error al cerrar sesión, Verifica tu conexión a internet', 'error'))
                .finally(() => state.dispatch(setIsLoading(false)))

        }
    }
}