import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { auth, authInDataBase } from "../../services/auth";
import { setIsLoading } from "../slice/uiSlice";
import { setAuth } from "../slice/authSlice";

export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'auth/login') {
            state.dispatch(setIsLoading(true))
            try {
                const userCredential = await authInDataBase(action.payload.email, action.payload.password)
                state.dispatch(
                    setAuth({
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        name: userCredential.user.displayName
                    }))
            } catch (error) {
                console.log(error)
            }
            state.dispatch(setIsLoading(false))
        }
    }
}