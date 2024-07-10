
import { ContentEdit } from '../components/contentEdit/ContentEdit'
import { Layout } from '../components/layout/Layout'
import { SidebarBlogs } from '../components/sidebarBlog/SidebarBlogs'

export const Clinica = () => {
    return (
        <Layout>
            <div className="cms-container">
                <div className="d-flex">
                    <SidebarBlogs />
                    <ContentEdit />
                </div>
            </div>
        </Layout>
    )
}
