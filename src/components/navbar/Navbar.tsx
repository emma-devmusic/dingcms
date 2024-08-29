import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/slice/authSlice";

export const Navbar = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch( logout() )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Ding<strong>CMS</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" to="/pages">Páginas Administradas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/pages/entity-selected/blogs'}>Blogs</Link>
                        </li>

                    </ul>
                    <form className="d-flex gap-3">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Perfil</Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" onClick={handleLogout}>
                            Salir
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};