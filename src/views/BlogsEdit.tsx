
import { SidebarBlogs } from "../components/sidebarBlog/SidebarBlogs"
import { Carrousel } from "../components/slick/Carrousel"


export const BlogsEdit = () => {


    return (
        <div className="cms-container">
            <div className="d-flex">
                <SidebarBlogs/>
                <Carrousel />
            </div>
        </div>
    )
}
