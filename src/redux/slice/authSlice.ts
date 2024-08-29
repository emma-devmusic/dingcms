import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../types/store';


const initialState:AuthState = {
    uid: null,
    name: null,
    email: null,
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
        login() {

        },
        logout(state){
            state = {...state, ...initialState};
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setAuth,
    login,
    logout
} = authSlice.actions





export default authSlice.reducer