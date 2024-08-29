import { useEffect } from "react";
import { BlogItem } from "../components/blog/BlogItem";
import { LayoutViews } from "../components/layout/LayoutViews";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getBlogs, resetActiveBlog } from "../redux/slice/blogsSlice";
import { useNavigate } from "react-router-dom";
import { SpinnerBox } from "../components/spinner/SpinnerBox";

export const BlogsPage = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { blogs } = useAppSelector(state => state.blogs)
    const { entitySelected } = useAppSelector(state => state.entity)
    const { isLoading } = useAppSelector(state => state.ui)

    useEffect(() => {
        const entityInLS = JSON.parse(localStorage.getItem('entity-selected') ?? '{}')
        if (entitySelected.slug !== entityInLS.slug && entitySelected.slug !== '') {
            dispatch(getBlogs(entitySelected.slug))
        }
    }, [])

    const handleNewBlog = () => {
        dispatch( resetActiveBlog() )
        navigate(`/pages/entity-selected/blog-settings`)
    }
    return (
        <LayoutViews pageTitle={`Blogs - ${entitySelected.name}`} >
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
                    minWidth: '761px'
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
                            !isLoading && blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)
                        }
                    </tbody>
                </table>
                { isLoading && <SpinnerBox /> }
            </div>

        </LayoutViews>

    );
};
