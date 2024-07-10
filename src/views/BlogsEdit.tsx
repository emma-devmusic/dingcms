
import { ContentEdit } from "../components/contentEdit/ContentEdit"
import { SidebarBlogs } from "../components/sidebarBlog/SidebarBlogs"


export const BlogsEdit = () => {



    return (
        <div className="cms-container">
            <div className="d-flex">
                <SidebarBlogs />
                <ContentEdit />
            </div>
        </div>
    )
}
