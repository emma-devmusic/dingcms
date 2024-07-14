import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    blogs: [],
    blogsSelected: [],
    blogActive: {}
}


export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        getBlogs(state, action: PayloadAction) {

        },
        getBlog(state, action: PayloadAction) {

        },
        setBlogs(state, action: PayloadAction) {

        },
        setBlog(state, action: PayloadAction) {

        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    getBlog,
    getBlogs,
    setBlog,
    setBlogs
 } = blogsSlice.actions

export default blogsSlice.reducer