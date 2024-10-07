import Swal from "sweetalert2";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserState } from "../types/store";

export const getUserDataFromDB = async (emailUser: string) => {

    let userData= {} as UserState
    const data = doc(db, "users", `${emailUser}`);
    try {
        const docSnap = await getDoc(data)
        if(docSnap.exists()){
            userData = { ...docSnap.data() } as UserState
        } else {
            Swal.fire('No hay Información', 'No existe en la base de datos información sobre este usuario', 'warning')   
        }
    } catch (error) {
        Swal.fire('Error en conexión', 'No se pudo conectar con la base de datos del Usuario', 'error')   
    }
    return userData
}
