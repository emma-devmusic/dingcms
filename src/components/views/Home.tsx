
import { ContentEdit } from "../contentEdit/ContentEdit";
import { SidebarBlogs } from "../sidebarBlog/SidebarBlogs";

export const Home = () => {
    
    return (
        <div className="cms-container">
            <div className="d-flex">
                <SidebarBlogs />
                <ContentEdit />
            </div>
        </div>
    );
};
