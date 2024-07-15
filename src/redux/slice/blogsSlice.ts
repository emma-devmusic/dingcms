import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Blog, BlogsState, NewBlog } from '../../types/store';


const initialState: BlogsState = {
    blogs: [] as Blog[],
    blogsSelected: [] as Blog[],
    blogActive: {} as Blog
}


export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        getBlogs(state, action: PayloadAction<string>) {

        },
        getBlog(state, action: PayloadAction) {

        },
        setBlogs(state, action: PayloadAction<Blog[]>) {
            state.blogs = action.payload
        },
        setBlog(state, action: PayloadAction) {
        },
        setActiveBlog(state, action: PayloadAction<Blog>) {
            state.blogActive = action.payload
        },
        newBlog(state, action: PayloadAction<NewBlog>){

        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    getBlog,
    getBlogs,
    setBlog,
    setBlogs,
    setActiveBlog,
    newBlog
 } = blogsSlice.actions

export default blogsSlice.reducer