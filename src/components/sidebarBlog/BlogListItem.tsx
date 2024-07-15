import { setActiveBlog } from "../../redux/slice/blogsSlice";
import { useAppDispatch } from "../../redux/store";

interface Props {
    blog: any
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
                <img src="/img/team-2.jpg" alt="" />
            </div>
            <div>
                <h6 className="m-0">{blog?.title}</h6>
                <p className="text-muted ">Lorem ipsum dolor sit.</p>
            </div>
        </li>
    );
};
