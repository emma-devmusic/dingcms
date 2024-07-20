import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    isLoading: false
}


export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    setIsLoading
 } = uiSlice.actions

export default uiSlice.reducer