import { useEffect, useMemo } from 'react';
import { BlogListItem } from './BlogListItem';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getBlogs } from '../../redux/slice/blogsSlice';




const BlogList = () => {

    const params = useParams()

    const dispatch = useAppDispatch()
    const { blogs } = useAppSelector( state=> state.blogs )
    const getAllBlogs = useMemo(() => dispatch( getBlogs(params.id as string)), [] )

    useEffect(() => {
        getAllBlogs
    }, [])


    
    return (
        <ul className="">
            {
                blogs.map((blog: any, i:number) =>
                    <BlogListItem blog={blog.data} key={i} />
                )
            }
        </ul>
    )
}


export default BlogList