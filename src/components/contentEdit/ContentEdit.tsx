
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { newBlog } from "../../redux/slice/blogsSlice";
import { useParams } from "react-router-dom";
import { NewBlog } from "../../types/store";

export const ContentEdit = () => {

    const { blogActive } = useAppSelector(state => state.blogs)
    const params = useParams()
    const dispatch = useAppDispatch()
    const { quill, quillRef } = useQuill();

    const [stateHtml, setStateHtml] = useState<string | undefined>()

    useEffect(() => {
        if (quill)
            quill.clipboard.dangerouslyPasteHTML( blogActive.html ?? '');
    }, [quill, blogActive]);

    const handleSave = () => {
        setStateHtml(quill?.root.innerHTML)
    }

    const handlePublish = () => {

        const arg = {
            entity: params.id,
            blog: { title: 'Titulo', html: stateHtml}
        }

        dispatch( newBlog(arg as NewBlog) )
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-3">
                <h1 className="">Editor de contenidos</h1>

                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary" onClick={handleSave}>Guardar</button>
                    <button className="btn btn-primary" onClick={handlePublish} disabled={!stateHtml}>Publicar</button>
                </div>
            </div>

            <div id="quill-box">
                <div ref={quillRef} />
            </div>

        </div>
    )
}
