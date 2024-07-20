import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntityState, Entity } from '../../types/store';


const initialState: EntityState = {
    entities: [],
    entitySelected: { name: '', slug: '' }
}


export const entitySlice = createSlice({
    name: 'entity',
    initialState: initialState,
    reducers: {
        getEntities(state, action: PayloadAction) {
            console.log(state, action)
        },
        setEntities(state, action: PayloadAction<Entity[]>) {
            state.entities = action.payload
        },
        setSelectedEntity(state, action: PayloadAction<{ name: string, slug: string }>) {
            state.entitySelected = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    getEntities,
    setEntities,
    setSelectedEntity
} = entitySlice.actions




export default entitySlice.reducer
