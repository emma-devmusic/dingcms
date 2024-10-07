import { setActiveBlog } from "../../redux/slice/blogsSlice";
import { useAppDispatch } from "../../redux/store";
import { Blog } from "../../types/store";

interface Props {
    blog: Blog
}


export const BlogListItem = ({blog}: Props) => {


    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch( setActiveBlog( {blog, isUpdating: true} ) )
    }

    return (
        <li
            className="list-group-item d-flex align-items-center gap-2 p-3"
            onClick={handleClick}
        >
            <div className="cms-list-blogs__img">
                <img src={`${blog.data.image}`} alt="" />
            </div>
            <div className="list-blog-details">
                <h6 className="m-0">{blog.data.title}</h6>
                <p className="text-muted m-0">{blog.data.description}</p>
            </div>
        </li>
    );
};
