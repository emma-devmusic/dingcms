import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";
import { app } from "./firebase";


//conect database
export const db = getFirestore(app);

