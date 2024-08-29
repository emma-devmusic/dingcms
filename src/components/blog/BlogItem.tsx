import Swal from "sweetalert2";
import { deleteBlog, setActiveBlog } from "../../redux/slice/blogsSlice";
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Blog } from "../../types/store";
import { Edit } from "../../assets/icons/edit";
import { Delete } from "../../assets/icons/delete";
import { useNavigate } from "react-router-dom";

export const BlogItem = ({ blog }: { blog: any }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id, data } = blog as Blog
    const { slug } = useAppSelector(state => state.entity.entitySelected)

    console.log(blog)

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBlog({ id, entity: slug }))
            }
        });
    }
    const handleEdit = () => {
        dispatch(setActiveBlog(blog))
        navigate(`/pages/entity-selected/blog-settings`)
    }

    return (
        <tr className="">
            <td>
                <div className="d-flex align-items-center" style={{
                    minHeight: '40px',
                }}>
                    <img src={`${data.image}`} id="img-item-blog" />
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center" style={{
                    minHeight: '40px',
                }}>
                    {data.title}
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center" style={{
                    minHeight: '40px',
                }}>
                    {data.description}
                </div>
            </td>
            <td >
                <div className="d-flex gap-1">
                    <button
                        onClick={handleEdit}
                        className="btn text-primary fs-5"
                    ><Edit /></button>
                    <button
                        onClick={handleDelete}
                        className="btn text-danger fs-5"
                    ><Delete /></button>
                </div>
            </td>
        </tr>
    );
};
