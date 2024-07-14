import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../types/store';


const initialState = {
    uid: '',
    name: '',
    email: '',
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth(state, action: PayloadAction<AuthState>) {
            state.email = action.payload.email;
            state.name = action.payload.name
            state.uid = action.payload.uid
        },
        login(state, action: PayloadAction<{email: string; password: string}>) {
            //middleware
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setAuth,
    login,
} = authSlice.actions





export default authSlice.reducer