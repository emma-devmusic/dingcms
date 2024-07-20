import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setIsLoading } from "../slice/uiSlice";
import Swal from "sweetalert2";
import { deleteBlogInDB, getterBlogFromDB, setBlogInDB } from "../../services/blogs";
import { setBlogs } from "../slice/blogsSlice";

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
                const blogs:any = await setBlogInDB(action.payload.entity, action.payload.blog)
                if(blogs) {
                    location.reload();
                    console.log(blogs)
                }
            } catch(err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false)) 
        }

        
        if(action.type === 'blogs/deleteBlog') {
            state.dispatch( setIsLoading(true) )
            try {
                await deleteBlogInDB(action.payload.entity, action.payload.id)
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