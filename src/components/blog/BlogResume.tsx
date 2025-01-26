
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { newBlog, updateBlog } from "../../redux/slice/blogsSlice";
import { NewBlog } from "../../types/store";
import dayjs from "dayjs";
import { setIsLoading } from "../../redux/slice/uiSlice";



interface Props {
    previous: any;
}

export const BlogResume = ({ previous }: Props) => {

    const dispatch = useAppDispatch()
    const { blogActive, isUpdating, blogType } = useAppSelector(state => state.blogs)
    const { entitySelected } = useAppSelector(state => state.entity)
    const { isLoading } = useAppSelector(state => state.ui)

    const handlePrevious = () => {
        previous()
    }

    const handlePublish = () => {
        const arg = {
            entity: entitySelected.slug,
            blog: blogActive.data,
            id: blogActive.id,
            blogType
        }
        dispatch(setIsLoading(true))
        if (isUpdating) {
            dispatch(updateBlog(arg))
        } else {
            dispatch(newBlog(arg as NewBlog))
        }
    }

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center" style={{
            height: '400px'
        }}>
            <div className="spinner-border" role="status"></div>
        </div>
    }

    return (
        <div className="container mt-3">
            <div className="d-flex align-items-center justify-content-between">
                <div className="card-title">
                    <h2>Resumen del Blog</h2>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary" onClick={handlePrevious}>Atrás</button>
                    <button
                        className="btn btn-primary"
                        onClick={handlePublish}
                    >
                        Publicar
                    </button>
                </div>
            </div>
            <hr />
            <div className="card p-4">
                <div className="card-body">
                    <p><strong>Titulo:</strong> <span>{blogActive.data.title}</span></p>
                    <p><strong>Editor:</strong> <span>{blogActive.data.creator}</span></p>
                    <p><strong>Fecha:</strong> <span>{dayjs(blogActive.data.date).format('DD/MM/YYYY')}</span></p>
                    <p><strong>Asunto:</strong> <span>{blogActive.data.issue}</span></p>
                    <p><strong>Categoría:</strong> <span>{blogActive.data.category}</span></p>
                    <p><strong>Descripción:</strong> <span>{blogActive.data.description}</span></p>
                    <p style={{
                        maxHeight: '200px',
                        overflow: 'scroll'
                    }}><strong>html:</strong> <span>{blogActive.data.html}</span></p>
                </div>
            </div>
        </div>
    );
};
