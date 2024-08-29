import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/store'

interface UserInformation {
    user: UserState
}

const initialState: UserInformation = {
    user: {
        name: null,
        email: null,
        instagram: null,
        phone: null,
        pages: [],
        image: null,
    }
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.user = {...action.payload }
        },
        getUserData(state, action: PayloadAction<string>) {
            console.log(state, action)
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setUser,
    getUserData
} = userSlice.actions





export default userSlice.reducer