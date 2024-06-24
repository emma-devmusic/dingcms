export const SidebarBlogs = () => {
    return (
        <div className="cms-list-blogs shadow">
            <h3 className="mt-2 p-3">Blogs</h3>
            <hr />
            <ul className="">
                <li className="list-group-item d-flex align-items-center gap-2 p-3">
                    <div className="cms-list-blogs__img">
                        <img src="/img/team-2.jpg" alt="" />
                    </div>
                    <div>
                        <h6 className="m-0">Titulo</h6>
                        <p className="text-muted ">Lorem ipsum dolor sit.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
