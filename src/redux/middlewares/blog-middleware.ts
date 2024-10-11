import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setIsLoading } from "../slice/uiSlice";
import Swal from "sweetalert2";
import { deleteBlogInDB, getterBlogFromDB, setBlogInDB, updateBlogsInDB } from "../../services/blogs";
import { getBlogs, setBlogs } from "../slice/blogsSlice";
import { RootState } from "../store";

export const blogMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'blogs/getBlogs') {
            state.dispatch(setIsLoading(true))
            try {
                const blogs = await getterBlogFromDB(action.payload)
                state.dispatch(setBlogs(blogs))
            } catch (err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false))

        }


        if (action.type === 'blogs/newBlog') {
            try {
                await setBlogInDB(action.payload.entity, action.payload.blog, action.payload.id)
                history.back()
            } catch (err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false))
        }


        if (action.type === 'blogs/deleteBlog') {
            state.dispatch(setIsLoading(true))
            const rootState = state.getState() as RootState
            try {
                await deleteBlogInDB(action.payload.entity, action.payload.id)
                state.dispatch(getBlogs(rootState.entity.entitySelected.slug))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                state.dispatch(setIsLoading(false))
            } catch (err) {
                state.dispatch(setIsLoading(false))
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
        }

        if (action.type === 'blogs/updateBlog') {
            try {
                await updateBlogsInDB(action.payload.entity, action.payload.blog, action.payload.id)
                Swal.fire({
                    title: "Blog Actualizado!",
                    text: "El blog ha sido actualizado con éxito!",
                    icon: "success"
                });
                history.back()
                state.dispatch(getBlogs(action.payload.entity))
                state.dispatch(setIsLoading(false))
            } catch (err) {
                state.dispatch(setIsLoading(false))
                Swal.fire('Error', 'Ocurrió un error actualizando el blog!', 'error');
            }
        }
    }
}