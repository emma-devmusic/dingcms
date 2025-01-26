
import { doc, getFirestore, collection, getDocs, setDoc, deleteDoc, updateDoc  } from "firebase/firestore";
import { app } from "./firebase";
import Swal from "sweetalert2";
import { Blog, BlogTypes, DataBlog } from "../types/store";
import { addKeywordsOnBlog } from "../helpers/functions";


export const db = getFirestore(app);

export const getterBlogFromDB = async (slug: string, type: BlogTypes) => {

    let blogsListItem: Blog[] = []

    const blogsEntity = collection(db, "entity", `${slug}`, `${type}`);
    const docSnap = await getDocs(blogsEntity);
    if (docSnap) {
        docSnap.forEach(e => {
            blogsListItem.push({id: e.id, data:e.data()} as Blog)
        })
    } else {
        Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
    }
    return blogsListItem
}


export const setBlogInDB = async ( entity:string , blog: DataBlog, blogId: string, type: BlogTypes) => {

    const collectionToInsert = doc(db, "entity", `${entity}`, `${type}`, `${blogId}`);
    
    try {
        await setDoc( collectionToInsert, {...addKeywordsOnBlog(blog)} );
        Swal.fire('Nuevo Blog', 'Nuevo blog cargado con éxito.', 'success')
    } catch (error) {
        Swal.fire('Nuevo Blog', 'No pudo cargarse el nuevo blog', 'error')   
    }
}

export const deleteBlogInDB = async ( entity: string, id: string, type: BlogTypes  ) => {

    const docToDelete =  doc(db, "entity", `${entity}`, `${type}`, `${id}`);
    try {
        await deleteDoc(docToDelete)
    } catch (error) {
        Swal.fire('Error Al Eliminar Blog', 'No pudo eliminarse el blog', 'error')   
    }
}


export const updateBlogsInDB = async ( entity: string, blog: DataBlog, id:string, type: BlogTypes ) => {

    const docToUpdate =  doc(db, "entity", `${entity}`, `${type}`, `${id}`);
    try {
        await updateDoc(docToUpdate, {...addKeywordsOnBlog(blog)});
        Swal.fire('Blog Actualizado', 'El blog ha sido actualizado con éxito.', 'success')
    } catch (error) {
        Swal.fire('Error Al Actualizar Blog', 'No pudo actualizarse el blog', 'error')   
    }
} 

export const updateSesionInDB = async ( entity: string, blog: DataBlog, id:string ) => {

    const docToUpdate =  doc(db, "entity", `${entity}`, "sesiones", `${id}`);
    try {
        await updateDoc(docToUpdate, {...addKeywordsOnBlog(blog)});
        Swal.fire('Blog Actualizado', 'El blog ha sido actualizado con éxito.', 'success')
    } catch (error) {
        Swal.fire('Error Al Actualizar Blog', 'No pudo actualizarse el blog', 'error')   
    }
} 
