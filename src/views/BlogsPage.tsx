import { useEffect, useState } from "react";
import { BlogItem } from "../components/blog/BlogItem";
import { LayoutViews } from "../components/layout/LayoutViews";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getBlogs, resetActiveBlog } from "../redux/slice/blogsSlice";
import { useNavigate } from "react-router-dom";
import { SpinnerBox } from "../components/spinner/SpinnerBox";
import { Blog } from "../types/store";
import { collection, limit, orderBy, query, onSnapshot, startAfter } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../services/blogs";

export const BlogsPage = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // const { blogs } = useAppSelector(state => state.blogs)
    const { entitySelected } = useAppSelector(state => state.entity)
    // const { isLoading } = useAppSelector(state => state.ui)


    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [firstDocument, setFirstDocument] = useState<any>(null)
    const [lastDocument, setLastDocument] = useState<any>(null)
    const [pageState, setPageState] = useState(1)
    const [blogsNumber] = useState(10)


    useEffect(() => {
        const entityInLS = JSON.parse(localStorage.getItem('entity-selected') ?? '{}')
        if (entitySelected.slug !== entityInLS.slug && entitySelected.slug !== '') {
            dispatch(getBlogs(entitySelected.slug))
        }
    }, [])

    const handleNewBlog = () => {
        dispatch(resetActiveBlog())
        navigate(`/pages/entity-selected/blog-settings`)
    }







    useEffect(() => {
        setIsLoading(true)
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'))
        try {
            onSnapshot(q, (querySnapshot) => {
                setFirstDocument(querySnapshot.docs[0])
                setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                setBlogs([])
                querySnapshot.forEach((doc) => {
                    setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    setIsLoading(false)
                })
            })
        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }, [])



    const handleNextPage = () => {
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'), startAfter(lastDocument))
        try {
            onSnapshot(q, (querySnapshot) => {
                if (querySnapshot.docs.length >= 1) {
                    setPageState(pageState + 1)
                }
                if (querySnapshot.docs.length > 0) {
                    setIsLoading(true)
                    setBlogs([])
                    setFirstDocument(querySnapshot.docs[0])
                    setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                    querySnapshot.docs.forEach((doc) => {
                        setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    })
                    setIsLoading(false)
                }
            })

        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }


    const handlePrevPage = () => {
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'asc'), startAfter(firstDocument))
        try {
            onSnapshot(q, (snapshot) => {
                const documentsRevers: any = snapshot.docs.reverse()
                if (documentsRevers.length > 0 && pageState !== 1) {
                    setPageState(pageState - 1)
                    setIsLoading(true)
                    setBlogs([])
                    setFirstDocument(documentsRevers[0])
                    setLastDocument(documentsRevers[documentsRevers.length - 1])
                    documentsRevers.forEach((doc: any) => {
                        setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    })
                    setIsLoading(false)
                }
            })

        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
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
                {isLoading && <SpinnerBox />}
            </div>



            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" onClick={handlePrevPage}>
                        <div className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </div>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">{pageState}</a></li>
                    <li className="page-item" onClick={handleNextPage}>
                        <div className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </div>
                    </li>
                </ul>
            </nav>



        </LayoutViews>

    );
};
