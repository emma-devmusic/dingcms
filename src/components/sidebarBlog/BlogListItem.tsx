import { setActiveBlog } from "../../redux/slice/blogsSlice";
import { useAppDispatch } from "../../redux/store";
import { DataBlog } from "../../types/store";

interface Props {
    blog: DataBlog
}


export const BlogListItem = ({blog}: Props) => {


    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch( setActiveBlog( blog ) )
    }

    return (
        <li
            className="list-group-item d-flex align-items-center gap-2 p-3"
            onClick={handleClick}
        >
            <div className="cms-list-blogs__img">
                <img src={`${blog.image}`} alt="" />
            </div>
            <div className="list-blog-details">
                <h6 className="m-0">{blog?.title}</h6>
                <p className="text-muted m-0">{blog.description}</p>
            </div>
        </li>
    );
};
