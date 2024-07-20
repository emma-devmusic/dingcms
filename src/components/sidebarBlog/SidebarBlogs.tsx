import { lazy, Suspense } from 'react';
import { Spinner } from '../spinner/Spinner';
import { Link } from 'react-router-dom';



export const SidebarBlogs = () => {

    const BlogList = lazy(() => import('./BlogList'));



    return (
        <div className="cms-list-blogs shadow-sm">
            <div className='d-flex justify-content-between aling-items-center mx-2 my-3'>
                <h3 className="">Blogs</h3>
                <Link to={'/blogs'} className='btn btn-outline-primary d-flex align-items-center justify-content-center'>Administrar</Link>
            </div>
            <hr  className='mt-0'/>
            <Suspense fallback={<Spinner />} >
                <BlogList />
            </Suspense>
        </div>
    );
};
