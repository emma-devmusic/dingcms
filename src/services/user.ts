import Swal from "sweetalert2";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore/lite";

export const getUserDataFromDB = async (emailUser: string) => {

    let userData= {} 
    const data = doc(db, "users", `${emailUser}`);

    const docSnap = await getDoc(data)
    if(docSnap.exists()){
        userData = {...docSnap.data()}
    } else {
        Swal.fire('No hay Información', 'No existe en la base de datos información sobre este usuario', 'warning')   
    }
    return userData
}
