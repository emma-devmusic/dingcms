import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../types/store';


const initialState:AuthState = {
    uid: null,
    name: null,
    email: null,
    image: null,
    instagram: null,
    pages: [],
    phone: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth(state, action: PayloadAction<AuthState>) {
            state.email = action.payload.email;
            state.name = action.payload.name
            state.uid = action.payload.uid,
            state.image = action.payload.image
            state.instagram = action.payload.instagram
            state.pages = action.payload.pages
            state.phone = action.payload.phone
        },
        login() {

        },
        logout(state){
            //middleware
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