import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntityState, Entity } from '../../types/store';


const initialState: EntityState = {
    entities: [],
    entitySelected: {name: '', slug: ''}
}


export const entitySlice = createSlice({
    name: 'entity',
    initialState: initialState,
    reducers: {
        getEntities(state, action: PayloadAction) {
            //middleware
        },
        setEntities(state, action: PayloadAction<Entity[]>) {
            state.entities = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    getEntities,
    setEntities
} = entitySlice.actions




export default entitySlice.reducer
