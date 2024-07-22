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
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];



export const ContentEdit = ({ next, previous }: Props) => {

    const { blogActive } = useAppSelector(state => state.blogs)
    const [stateHtml, setStateHtml] = useState<string | undefined>(blogActive.data.html)


    useEffect(() => {
        setStateHtml(blogActive.data.html)
    }, [blogActive])

    useEffect(() => {
        setStateHtml(blogActive.data.html)
    },[])

    const dispatch = useAppDispatch()
    const modules = { toolbar: toolbarOptions };

    const handleNext = () => {
        let dataBlog: DataBlog = {} as DataBlog
        if (stateHtml) {
            dataBlog = {
                ...blogActive.data,
                html: stateHtml
            }
            dispatch(setActiveBlog({ id: '', data: dataBlog }))
            next()
        }
    }

    

    return (
        <div className="container">
            <div >
                <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary" onClick={() => previous()} >Atrás</button>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <h1 className="">Editor de contenidos</h1>
                        <button className="btn text-primary" onClick={() => setStateHtml('')}>Limpiar</button>
                    </div>
                    <button className="btn btn-primary" onClick={handleNext} disabled={!stateHtml}>Continuar</button>
                </div>

                <div id="quill-box">
                    <ReactQuill 
                        className='quill-box'
                        theme="snow"
                        placeholder="Escribe tu blog..."
                        value={stateHtml} 
                        onChange={setStateHtml} 
                        formats={['bold', 'italic', 'underline', 'strike','blockquote', 'code-block','link', 'image', 'video', 'formula', 'header', 'size', 'align', 'color', 'background', 'list', 'font', 'indent', 'script', 'direction']}
                        modules={modules}
                    />
                </div>


            </div>
        </div>
    )
}