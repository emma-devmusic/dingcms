import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Blog, BlogsState, NewBlog } from '../../types/store';


const initialState: BlogsState = {
    blogs: [] as Blog[],
    blogsSelected: [] as Blog[],
    blogActive: {
        id: '',
        data: {
            category: '',
            creator: '',
            date: '',
            description: '',
            html: '',
            image: '',
            issue: '',
            title: '',
            id: ''
        }
    } as Blog
}


export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        getBlogs(state, action: PayloadAction<string>) {
            console.log(state, action)
        },
        getBlog(state, action: PayloadAction) {
            console.log(state, action)
        },
        setBlogs(state, action: PayloadAction<Blog[]>) {
            state.blogs = action.payload
        },
        setBlog(state, action: PayloadAction) {
            console.log(state, action)
        },
        setActiveBlog(state, action: PayloadAction<Blog>) {
            state.blogActive = action.payload
        },
        newBlog(state, action: PayloadAction<NewBlog>) {
            console.log(state, action)
        },
        deleteBlog(state, action: PayloadAction<{ id: string, entity: string }>) {
            console.log(state, action)
        },
        resetActiveBlog(state) {
            state.blogActive = initialState.blogActive
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
    newBlog,
    deleteBlog,
    resetActiveBlog
} = blogsSlice.actions

export default blogsSlice.reducer