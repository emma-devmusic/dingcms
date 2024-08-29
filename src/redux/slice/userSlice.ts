import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/store'


const initialState: UserState = {
    user: {
        uid: '',
        name: '',
        email: '',
        instagram: '',
        phone: '',
        pages: [],
        image: '',
    }
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state = {...state, ...action.payload}
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setUser
} = userSlice.actions





export default userSlice.reducer