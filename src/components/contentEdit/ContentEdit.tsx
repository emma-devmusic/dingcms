
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";


export const ContentEdit = () => {

    const { quill, quillRef } = useQuill();

    const [stateHtml, setStateHtml] = useState<string | undefined>()

    useEffect(() => {
        if (quill)
            quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
    }, [quill]);

    const handleSave = () => {
        setStateHtml(quill?.root.innerHTML)
    }

    const handleClick = () => {
        console.log(stateHtml)
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-3">
                <h1 className="">Editor de contenidos</h1>

                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary" onClick={handleSave}>Guardar</button>
                    <button className="btn btn-primary" onClick={handleClick} disabled={!stateHtml}>Publicar</button>
                </div>
            </div>

            <div id="quill-box">
                <div ref={quillRef} />
            </div>

        </div>
    )
}
