import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "./firebase";
import { Entity } from "../types/store";

export const getterEntities = async () => {

    let result:Entity[] = [];

    const entities = collection(db, "entity");
    const docSnap = await getDocs(entities);
    if (docSnap) {
        docSnap.forEach(e => {
            result.push(e.data() as Entity)
        })
    } else {
        Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
    }
    return result
}