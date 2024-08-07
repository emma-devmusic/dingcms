import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { newBlog } from "../../redux/slice/blogsSlice";
import { NewBlog } from "../../types/store";



interface Props {
    previous: any;
}



export const BlogResume = ({ previous }: Props) => {

    const { blogActive } = useAppSelector(state => state.blogs)

    const params = useParams()
    const dispatch = useAppDispatch()

    const handlePrevious = () => {
        previous()
    }

    const handlePublish = () => {

        const arg = {
            entity: params.id,
            blog: blogActive.data
        }

        dispatch( newBlog(arg as NewBlog) )
    }
    return (
        <div className="container">
            <div className=" card p-4">
                <div className="card-title">
                    <h5>Resumen del Blog</h5>
                </div>
                <hr />
                <div className="card-body">
                    <p><strong>Titulo:</strong> <span>{blogActive.data.title}</span></p>
                    <p><strong>Editor:</strong> <span>{blogActive.data.creator}</span></p>
                    <p><strong>Fecha:</strong> <span>{blogActive.data.date}</span></p>
                    <p><strong>Asunto:</strong> <span>{blogActive.data.issue}</span></p>
                    <p><strong>Categoría:</strong> <span>{blogActive.data.category}</span></p>
                    <p><strong>Descripción:</strong> <span>{blogActive.data.description}</span></p>
                    <p style={{
                        maxHeight: '200px',
                        overflow: 'scroll'
                    }}><strong>html:</strong> <span>{blogActive.data.html}</span></p>
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
        </div>
    );
};
