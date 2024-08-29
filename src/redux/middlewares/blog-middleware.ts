import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setIsLoading } from "../slice/uiSlice";
import Swal from "sweetalert2";
import { deleteBlogInDB, getterBlogFromDB, setBlogInDB } from "../../services/blogs";
import { getBlogs, setBlogs } from "../slice/blogsSlice";
import { RootState } from "../store";

export const blogMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'blogs/getBlogs') {
            state.dispatch( setIsLoading(true) )
            try {
                const blogs = await getterBlogFromDB(action.payload)
                state.dispatch( setBlogs(blogs) )
            } catch(err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false))

        }


        if(action.type === 'blogs/newBlog') {
            state.dispatch( setIsLoading(true) )
            try {
                await setBlogInDB(action.payload.entity, action.payload.blog, action.payload.id)
            } catch(err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false)) 
        }

        
        if(action.type === 'blogs/deleteBlog') {
            state.dispatch( setIsLoading(true) )
            const rootState = state.getState() as RootState
            try {
                await deleteBlogInDB(action.payload.entity, action.payload.id)
                state.dispatch( getBlogs( rootState.entity.entitySelected.slug ) )
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } catch(err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false)) 
        }

    }
}