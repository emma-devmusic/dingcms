import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setActiveBlog } from '../../redux/slice/blogsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { DataBlog } from '../../types/store';

interface Props {
    next: any;
    previous: any;
}

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

export const ContentEdit = ({ next, previous }: Props) => {

    const dispatch = useAppDispatch()
    const modules = { toolbar: toolbarOptions };
    const { blogActive, isUpdating } = useAppSelector(state => state.blogs)
    const [ stateHtml, setStateHtml ] = useState<string | undefined>(blogActive.data.html)

    useEffect(() => {
        setStateHtml(blogActive.data.html)
    }, [blogActive])

    useEffect(() => {
        setStateHtml(blogActive.data.html)
    }, [])

    const handleNext = () => {
        let dataBlog: DataBlog = {} as DataBlog
        if (stateHtml) {
            dataBlog = {
                ...blogActive.data,
                html: stateHtml
            }
            dispatch(setActiveBlog({ blog: { id: blogActive.id, data: dataBlog }, isUpdating }))
            next()
        }
    }

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex justify-content-between gap-2">
                    <h2 className="">Editor de contenidos</h2>
                    <button className="btn text-primary" onClick={() => setStateHtml('')}>Limpiar</button>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary" onClick={() => previous()} >Atrás</button>
                    <button className="btn btn-primary" onClick={handleNext} disabled={!stateHtml}>Continuar</button>
                </div>
            </div>

            <div id="quill-box">
                <ReactQuill
                    className='quill-box'
                    theme="snow"
                    placeholder="Escribe tu blog..."
                    value={stateHtml}
                    onChange={setStateHtml}
                    formats={['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'link', 'image', 'video', 'formula', 'header', 'size', 'align', 'color', 'background', 'list', 'font', 'indent', 'script', 'direction']}
                    modules={modules}
                    style={{ minHeight: '500px' }}
                />
            </div>
        </div>
    )
}