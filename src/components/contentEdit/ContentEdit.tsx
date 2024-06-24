import Quill, { QuillOptions } from "quill"
import { useEffect, useRef } from "react";
import "quill/dist/quill.core.css";


export const ContentEdit = () => {

    const editor = useRef()

    const options = {
        debug: 'info',
        modules: {
            toolbar: true,
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
    };
    useEffect(() => {
        const quill = new Quill('#editor');
    }, [])
    return (
        <div className="container">
            <h1 className="mt-2">Editor de contenidos</h1>
            <hr />
            <div id="editor"></div>

        </div>
    )
}
