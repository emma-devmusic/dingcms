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
            state = { ...action.payload }
        },
        getUserData(state, action:PayloadAction<string>) {

        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setUser,
    getUserData
} = userSlice.actions





export default userSlice.reducer