import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setIsLoading } from "../slice/uiSlice";
import Swal from "sweetalert2";
import { deleteBlogInDB, getterBlogFromDB, setBlogInDB, updateBlogsInDB } from "../../services/blogs";
import { getBlogs, setBlogs, updateBlog } from "../slice/blogsSlice";
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
            state.dispatch(setIsLoading(true))
            try {
                await setBlogInDB(action.payload.entity, action.payload.blog, action.payload.id)
                location.replace('pages/entity-selected/blogs')
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
            } catch (err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false))
        }

        if (action.type === 'blogs/updateBlog') {
            state.dispatch(setIsLoading(true))
            try {
                await updateBlogsInDB(action.payload.entity, action.payload.blog, action.payload.id)
                Swal.fire({
                    title: "Blog Actualizado!",
                    text: "El blog ha sido actualizado con éxito!",
                    icon: "success"
                });
                history.back()
                state.dispatch( getBlogs( action.payload.entity ) )
            } catch (err) {
                Swal.fire('Error', 'Ocurrió un error actualizando el blog!', 'error');
            }
            state.dispatch(setIsLoading(false))
        }
    }
}