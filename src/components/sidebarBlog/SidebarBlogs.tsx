import { useEffect, useState, Suspense } from 'react';
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from '../../services/firebase';
import { Spinner } from '../spinner/Spinner';
import Swal from 'sweetalert2';

export const SidebarBlogs = () => {


    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        const docRef = doc(db, "entity", "concejo-charata");
        const docSnap = await getDoc(docRef);

        if(docSnap){
            console.log(docSnap.data());
            setBlogs(docSnap.data()?.blogs)
        } else {
            Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
        }
    }


    useEffect(() => {
        getBlogs()
    },[])

    const handleClick = () => {
        console.log('Seleccionar Blog')
    }


    return (
        <div className="cms-list-blogs shadow">
            <h3 className="mt-2 p-3">Blogs</h3>
            <hr />
            <ul className="">
                <Suspense fallback={<Spinner />}>
                {/* List-Item */}
                {
                    blogs.map( (blog:any, i) => 
                        <li 
                            className="list-group-item d-flex align-items-center gap-2 p-3" 
                            onClick={() => handleClick()}
                            key={i}
                        >
                            <div className="cms-list-blogs__img">
                                <img src="/img/team-2.jpg" alt="" />
                            </div>
                            <div>
                                <h6 className="m-0">{blog?.title}</h6>
                                <p className="text-muted ">Lorem ipsum dolor sit.</p>
                            </div>
                        </li>
                    )
                }
                </Suspense>
            </ul>
        </div>
    );
};
