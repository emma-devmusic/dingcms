import { useEffect, useMemo } from "react";
import { BlogItem } from "../components/blog/BlogItem";
import { LayoutViews } from "../components/layout/LayoutViews";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getBlogs } from "../redux/slice/blogsSlice";
import { useNavigate } from "react-router-dom";

export const BlogsPage = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { blogs } = useAppSelector(state => state.blogs)
    const { entitySelected } = useAppSelector(state => state.entity)
    // const getAllBlogs = useMemo(() => dispatch(getBlogs(entitySelected.slug)), [])

    useEffect(() => {
        dispatch(getBlogs(entitySelected.slug))
        // getAllBlogs
    }, [])

    const handleNewBlog = () => {
        navigate(`/pages/entity-selected/blog-settings`)
    }
    return (
        <LayoutViews pageTitle="Blogs" >
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>Admistra los Blogs</h5>
                    <p>Crea, edita o elimina los blogs cuanto necesites.</p>
                </div>
                <div>
                    <button
                        onClick={handleNewBlog}
                        className="btn btn-primary"
                    >
                        Nuevo Blog
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table border table-striped rounded table-hover" style={{
                    minWidth: '650px'
                }}>
                    <thead className="">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)
                        }
                    </tbody>
                </table>
            </div>

        </LayoutViews>

    );
};
