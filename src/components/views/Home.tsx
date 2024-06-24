import { Link } from "react-router-dom";
import { ContentEdit } from "../contentEdit/ContentEdit";

export const Home = () => {
    return (

        <div className="cms-container">
            <div className="d-flex">
                <div className="cms-list-blogs shadow">
                    <h3 className="mt-2">Blogs</h3>
                    <hr />
                    <ul className="">
                        <li className="list-group-item d-flex align-items-center gap-1">
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

                <ContentEdit />
            </div>
        </div>
    );
};
