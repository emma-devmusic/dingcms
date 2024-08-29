import './profile.css'

interface Props {
    name: string | null;
    email: string | null;
    uid: string | null;
    pagesAdmin: string[];
    instagram: string;
}

export const ProfileData = ({name, email, uid, instagram, pagesAdmin}: Props) => {

    console.log(uid)

    return (
        <div className="row py-5 px-4">
            <div className="col-md-5 mx-auto">
                {/* Profile widget */}
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="align-items-end profile-head d-flex gap-3">
                            <div className="profile mr-3 d-flex flex-column">
                                <img
                                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                    alt="Profile"
                                    width="130"
                                    className="rounded mb-2 img-thumbnail"
                                />
                                <a href={instagram} className="btn btn-outline-dark btn-sm btn-block">Instagram</a>
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">{name}</h4>
                                <p className="small mb-4">
                                    <i className="fas fa-map-marker-alt mr-2"></i>{email}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">215</h5>
                                <small className="text-muted">
                                    <i className="fas fa-image mr-1"></i>Photos
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">745</h5>
                                <small className="text-muted">
                                    <i className="fas fa-user mr-1"></i>Followers
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">340</h5>
                                <small className="text-muted">
                                    <i className="fas fa-user mr-1"></i>Following
                                </small>
                            </li>
                        </ul>
                    </div> */}
                    <div className="px-4 py-3 mt-5">
                        <h5 className="mb-0">Páginas Administradas</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            {
                                pagesAdmin.map((page, index) => 
                                    <p key={index} className="font-italic mb-0">{page}</p>
                                )
                            }
                        </div>
                    </div>
                    {/* <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Recent photos</h5>
                            <a href="#" className="btn btn-link text-muted">Show all</a>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-2 pr-lg-1">
                                <img
                                    src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    alt="Photo 1"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6 mb-2 pl-lg-1">
                                <img
                                    src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    alt="Photo 2"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6 pr-lg-1 mb-2">
                                <img
                                    src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                    alt="Photo 3"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6 pl-lg-1">
                                <img
                                    src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                    alt="Photo 4"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    );
};
