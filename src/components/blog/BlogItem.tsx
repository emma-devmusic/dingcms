import Swal from "sweetalert2";
import { deleteBlog } from "../../redux/slice/blogsSlice";
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Blog } from "../../types/store";

export const BlogItem = ({ blog }: { blog: any }) => {

    const dispatch = useAppDispatch()
    const { id, data } = blog as Blog
    const {slug} = useAppSelector(state=> state.entity.entitySelected)
    const handleDelete = () => {
        // dispatch(deleteBlog({ id, entity }))
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBlog({ id, entity: slug }))
            }
        });
    }

    return (
        <tr className="">
            <td><img src={`${data.image}`} alt="" id="img-item-blog" /></td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>
                <button
                    onClick={handleDelete}
                    className="btn btn-danger"
                >Eliminar</button>
            </td>
        </tr>
    );
};
