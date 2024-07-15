
import { doc, getDoc, getFirestore, collection, getDocs, setDoc, addDoc } from "firebase/firestore/lite";
import { app } from "./firebase";
import Swal from "sweetalert2";
import { Blog } from "../types/store";
import { useId } from "react";


//conect database
export const db = getFirestore(app);

export const getterBlogFromDB = async (slug: string) => {

    let blogsListItem: Blog[] = []

    const blogsEntity = collection(db, "entity", `${slug}`, "blogs");
    const docSnap = await getDocs(blogsEntity);
    if (docSnap) {
        docSnap.forEach(e => {
            blogsListItem.push(e.data() as Blog)
        })
    } else {
        Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
    }
    return blogsListItem
}



export const setBlogInDB = async ( entity:string , blog: { title: string; html: string }) => {

    const docToInsert = collection(db, "entity", `${entity}`, "blogs")
    try {
        const result = await addDoc( docToInsert, blog);
        if(result) {
            Swal.fire('Nuevo Blog', 'Nuevo blog cargado con éxito.', 'success')
            location.reload()
        }
    } catch (error) {
        Swal.fire('Nuevo Blog', 'No pudo cargarse el nuevo blog', 'error')   
    }
}

