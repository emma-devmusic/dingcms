import { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from '../../services/firebase';

export const SidebarBlogs = () => {



    const traer = async () => {
        const docRef = doc(db, "entity", "concejo-charata");
        const docSnap = await getDoc(docRef);
        if(docSnap){
            console.log(docSnap.data())
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
    }, [])

    const handleClick = () => {
        // saveUser()
    }
    const handleTraer = () => {
        traer()
    }


    return (
        <div className="cms-list-blogs shadow">
            <h3 className="mt-2 p-3">Blogs</h3>
            <hr />
            <ul className="">

                {/* List-Item */}
                <li className="list-group-item d-flex align-items-center gap-2 p-3" onClick={handleClick}>
                    <div className="cms-list-blogs__img">
                        <img src="/img/team-2.jpg" alt="" />
                    </div>
                    <div>
                        <h6 className="m-0">Titulo</h6>
                        <p className="text-muted ">Lorem ipsum dolor sit.</p>
                    </div>
                </li>


                <button onClick={handleTraer}>traer datos</button>
            </ul>
        </div>
    );
};
