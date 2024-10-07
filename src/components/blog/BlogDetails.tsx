import { useCallback, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useDropzone } from 'react-dropzone'
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { resetActiveBlog, setActiveBlog } from "../../redux/slice/blogsSlice";
import { Category, DataBlog } from "../../types/store";
import { getterCategoriesFromDB } from "../../services/categories";
import Swal from "sweetalert2";
import { toSlug } from "../../helpers/functions";
import dayjs from "dayjs";


interface Props {
    next: any;
}

export const BlogDetails = ({ next }: Props) => {

    const dispatch = useAppDispatch()
    const { blogActive, isUpdating } = useAppSelector(state => state.blogs)
    const { entitySelected } = useAppSelector(state => state.entity)
    const [categories, setCategories] = useState<Category[]>([]);
    const [imageBlog, setImageBlog] = useState<string | ArrayBuffer | null>('')
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
        setImageBlog(blogActive.data.image)
    }, [blogActive])

    useEffect(() => {
        if(entitySelected.slug !== '')
        getterCategoriesFromDB(entitySelected.slug)
            .then(resp => setCategories(resp))
            .catch(err => console.error(err))
    }, [entitySelected])


    const onDrop = useCallback((acceptedFiles: any) => {
        if(acceptedFiles[0].size > 2000000) {
            Swal.fire('Tamaño de archivo excesivo!', 'El archivo debe pesar menos de 2MB', 'warning')
            return
        }
        let reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onload = () => (reader.result) && setImageBlog(reader.result)
        reader.onerror = (err) => console.log(err)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleNext = (e: any) => {
        e.preventDefault()
        const dataBlog: DataBlog = {
            ...values,
            image: imageBlog,
            date: dayjs(values.date).format('YYYY-MM-DD'),
            id: toSlug(values.title)
        }
        console.log(dataBlog.date)
        if (imageBlog) {
            dispatch(setActiveBlog({ blog:{ id: toSlug(values.title), data: dataBlog }, isUpdating }))
            next()
        } else {
            Swal.fire('¡Falta la portada!', 'Selecciona una imagen de portada para el blog', 'warning')
        }
    }


    return (
        <div className="mt-3 px-2">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Detalles del Blog</h2>
                <button className="btn btn-primary" onClick={() => dispatch(resetActiveBlog())}>Limpiar</button>
            </div>
            <hr />
            <form className="d-flex flex-column" onSubmit={handleNext} style={{
                maxWidth: '600px',
                margin: '0 auto',
            }} >
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
                        type="date" className="form-control" aria-label="date" name="date" aria-describedby="inputGroup-sizing-sm" required />
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
                    <div className="image-banner-blog rounded border p-3 mb-3">
                        {
                            imageBlog 
                            ? <img src={imageBlog as string} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} />
                            : <p className="text-center m-0">Sube una imagen de portada</p>
                        }
                    </div>
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
