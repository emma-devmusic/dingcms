
import { doc, getFirestore, collection, getDocs, setDoc, deleteDoc, updateDoc  } from "firebase/firestore";
import { app } from "./firebase";
import Swal from "sweetalert2";
import { Blog, DataBlog } from "../types/store";


//conect database
export const db = getFirestore(app);

export const getterBlogFromDB = async (slug: string) => {

    let blogsListItem: Blog[] = []

    const blogsEntity = collection(db, "entity", `${slug}`, "blogs");
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



export const setBlogInDB = async ( entity:string , blog: DataBlog, blogId: string) => {

    const collectionToInsert = doc(db, "entity", `${entity}`, "blogs", `${blogId}`);
    try {
        await setDoc( collectionToInsert, blog );
        Swal.fire('Nuevo Blog', 'Nuevo blog cargado con éxito.', 'success')
    } catch (error) {
        Swal.fire('Nuevo Blog', 'No pudo cargarse el nuevo blog', 'error')   
    }
}


export const deleteBlogInDB = async ( entity: string, id: string ) => {

    const docToDelete =  doc(db, "entity", `${entity}`, "blogs", `${id}`);
    try {
        await deleteDoc(docToDelete)
    } catch (error) {
        Swal.fire('Error Al Eliminar Blog', 'No pudo eliminarse el blog', 'error')   
    }
}


export const updateBlogsInDB = async ( entity: string, blog: DataBlog, id:string ) => {

    const docToUpdate =  doc(db, "entity", `${entity}`, "blogs", `${id}`);
    try {
        await updateDoc(docToUpdate, {...blog});
        Swal.fire('Blog Actualizado', 'El blog ha sido actualizado con éxito.', 'success')
    } catch (error) {
        Swal.fire('Error Al Actualizar Blog', 'No pudo actualizarse el blog', 'error')   
    }
} 
