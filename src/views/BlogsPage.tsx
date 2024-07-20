import { BlogItem } from "../components/blog/BlogItem";
import { LayoutViews } from "../components/layout/LayoutViews";
import { useAppSelector } from "../redux/store";

export const BlogsPage = () => {

    const { blogs } = useAppSelector( state => state.blogs )
    return (
        <LayoutViews pageTitle="Administrar Blogs" >
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#Imagen</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map( blog => <BlogItem blog={blog} key={blog.id}/>)
                    }
                </tbody>
            </table>

        </LayoutViews>

    );
};
