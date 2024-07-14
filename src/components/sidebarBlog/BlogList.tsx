import { useEffect, useState } from 'react';
import { db } from '../../services/firebase';
import Swal from 'sweetalert2';
import { BlogListItem } from './BlogListItem';
import { collection, getDocs } from 'firebase/firestore/lite';




const BlogList = () => {

    const [blogs, setBlogs] = useState<any>([])

    const getBlogs = async () => {
        const docRef = collection(db, "entity", "concejo-charata", "blogs");
        const docSnap = await getDocs(docRef);
        if (docSnap) {
            docSnap.forEach( e=> {
                setBlogs((state:any)=> [...state, e.data()])
            })
        } else {
            Swal.fire('Sin Blogs', 'No hay blogs en esta página', 'warning')
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    
    return (
        <ul className="">
            {
                blogs.map((blog: any, i:number) =>
                    <BlogListItem blog={blog} key={i} />
                )
            }
        </ul>
    )
}


export default BlogList