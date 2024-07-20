
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setActiveBlog } from "../../redux/slice/blogsSlice";
import { DataBlog } from '../../types/store';

interface Props {
    next: any;
    previous: any;
}



export const ContentEdit = ({ next, previous }: Props) => {



    const { blogActive } = useAppSelector(state => state.blogs)
    const dispatch = useAppDispatch()
    const { quill, quillRef } = useQuill();

    const [stateHtml, setStateHtml] = useState<string | undefined>()

    useEffect(() => {
        if (quill)
            quill.clipboard.dangerouslyPasteHTML(blogActive.data.html ?? '');
    }, [quill, blogActive]);

    const handleSave = () => {
        setStateHtml(quill?.root.innerHTML)
    }

    const handleNext = () => {
        let blog: DataBlog = {} as DataBlog
        if (stateHtml) {
            blog = {
                ...blogActive.data,
                html: stateHtml
            }
            dispatch(setActiveBlog(blog))
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
                        <button className="btn btn-outline-primary" onClick={handleSave}>Guardar</button>
                    </div>
                    <button className="btn btn-primary" onClick={handleNext} disabled={!stateHtml}>Continuar</button>
                </div>

                <div id="quill-box">
                    <div ref={quillRef} />
                </div>

            </div>
        </div>
    )
}
