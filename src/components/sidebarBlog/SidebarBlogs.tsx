import { lazy, Suspense } from 'react';
import { Spinner } from '../spinner/Spinner';



export const SidebarBlogs = () => {

    const BlogList = lazy(() => import('./BlogList'));



    return (
        <div className="cms-list-blogs shadow-sm">
            <h3 className="mt-2 p-3">Blogs</h3>
            <hr />
            <Suspense fallback={<Spinner /> } >
                <BlogList />
            </Suspense>
        </div>
    );
};
