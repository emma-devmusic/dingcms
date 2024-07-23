import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useDropzone } from 'react-dropzone'
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { resetActiveBlog, setActiveBlog } from "../../redux/slice/blogsSlice";
import { Category, DataBlog } from "../../types/store";
import { getterCategoriesFromDB } from "../../services/categories";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


interface Props {
    next: any;
}

export const BlogDetails = ({ next }: Props) => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const { blogActive } = useAppSelector(state => state.blogs)
    const [categories, setCategories] = useState<Category[]>([]);
    const [imageBlog, setImageBlog] = useState<string | ArrayBuffer>('')
    const [values, handleInputChange, reset] = useForm({
        title: '',
        creator: '',
        category: '',
        issue: '',
        description: '',
        date: ''
    } as DataBlog)

    useEffect(() => {
        reset(blogActive.data)
    }, [blogActive])

    useEffect(() => {
        getterCategoriesFromDB(params.id ?? '')
            .then(resp => setCategories(resp))
            .catch(err => console.error(err))
    }, [])

    
    const onDrop = useCallback((acceptedFiles: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onload = () => setImageBlog(reader.result ?? '')
        reader.onerror = (err) => console.log(err)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleNext = (e: any) => {
        e.preventDefault()
        const dataBlog: DataBlog = {
            ...values,
            image: imageBlog,
            html: '',
            date: (values.date === '') ? new Date().toLocaleDateString() : values.date
        }
        if (imageBlog) {
            dispatch(setActiveBlog({ id: '', data: dataBlog }))
            next()
        } else {
            Swal.fire('¡Falta la portada!', 'Selecciona una imagen de portada para el blog', 'warning')
        }
    }

    return (
        <div className="mt-3 px-2">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Detalles del Blog</h2>
                <button className="btn btn-primary" onClick={() => dispatch( resetActiveBlog() )}>Limpiar</button>
            </div>
            <hr />
            <form className="d-flex flex-column" style={{ maxWidth: '600px' }} onSubmit={handleNext}>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm" aria-label="title">Título</span>
                    <input
                        value={values.title}
                        onChange={handleInputChange}
                        type="text" className="form-control" aria-label="title" name="title" aria-describedby="inputGroup-sizing-sm" required />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm" aria-label="creator">Editor</span>
                    <input
                        value={values.creator}
                        onChange={handleInputChange}
                        type="text" className="form-control" aria-label="creator" name="creator" aria-describedby="inputGroup-sizing-sm" required />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm" aria-label="date">Fecha (Ej: 17/05/2024)</span>
                    <input
                        value={values.date}
                        onChange={handleInputChange}
                        type="text" className="form-control" aria-label="date" name="date" aria-describedby="inputGroup-sizing-sm" required />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm" aria-label="issue">Tema</span>
                    <input
                        value={values.issue}
                        onChange={handleInputChange}
                        type="text" className="form-control" aria-label="issue" name="issue" aria-describedby="inputGroup-sizing-sm" required />
                </div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm" aria-label="issue">Categoría</span>
                    <select value={values.category} onChange={handleInputChange} className="form-select" aria-label="Default select example" name="category" required>
                        <option defaultValue={''} value={''}>Selecciona una Categoría</option>
                        {
                            categories.map((cat) => <option value={cat.name} key={cat.name}>{cat.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        value={values.description}
                        onChange={handleInputChange}
                        className="form-control" placeholder="Descripción del blog..." name='description' id="floatingTextarea" required></textarea>
                    <label htmlFor="floatingTextarea">Breve descripción del blog...</label>
                </div>

                <div className="form-floating">
                    <span className="form-label mb-2 d-block" >Imagen de portada</span>
                    <div
                        {...getRootProps()}
                        className="border rounded p-2 mb-3 react-dropzone"
                    >
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p className="m-0">Arrastra aquí...</p> :
                                <p className="m-0 text-center">Haz click aquí o arrastra una imagen</p>
                        }
                    </div>
                </div>



                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
};
