import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Blog, BlogsState, BlogTypes, NewBlog } from '../../types/store';


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
        },
    } as Blog,
    blogType: 'blogs',
    isUpdating: false,
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
        setIndividuallyBlogs(state, action: PayloadAction<Blog>) {
            state.blogs = [...state.blogs, action.payload]
        },
        setBlog(state, action: PayloadAction) {
            console.log(state, action)
        },
        setBlogType(state, action: PayloadAction<BlogTypes>) {
            state.blogType = action.payload
        },
        setActiveBlog(state, action: PayloadAction<{blog: Blog; isUpdating: boolean}>) {
            state.blogActive = action.payload.blog
            state.isUpdating = action.payload.isUpdating
        },
        newBlog(state, action: PayloadAction<NewBlog>) {
            console.log(state, action)
        },
        deleteBlog(state, action: PayloadAction<{ id: string, entity: string }>) {
            console.log(state, action)
        },
        resetActiveBlog(state) {
            state.blogActive = initialState.blogActive
            state.isUpdating = false
        },
        blogsClear(state) {
            state = {...state, ...initialState}
        },
        updateBlog(state, action: PayloadAction<NewBlog>){
            console.log(state, action)
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    getBlog,
    getBlogs,
    setIndividuallyBlogs,
    setBlog,
    setBlogs,
    setBlogType,
    setActiveBlog,
    newBlog,
    deleteBlog,
    resetActiveBlog,
    blogsClear,
    updateBlog
} = blogsSlice.actions

export default blogsSlice.reducer