import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setIsLoading } from "../slice/uiSlice";
import { getUserDataFromDB } from "../../services/user";
import { setUser } from "../slice/userSlice";
import Swal from "sweetalert2";

export const userMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'user/getUserData') {
            state.dispatch(setIsLoading(true))
            try {
                const resp = await getUserDataFromDB(action.payload)
                state.dispatch( setUser( resp ) )
            } catch (error) {
                Swal.fire('Error', 'No se puede cargar el usuario', 'error')
            }
            state.dispatch(setIsLoading(false))
        }
    }
}