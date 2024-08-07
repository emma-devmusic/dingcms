import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/auth";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

export const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login')
                sessionStorage.clear()
            }).catch((error) => {
                console.log(error)
                Swal.fire('Error', 'Hubo un error para salir de la sesion', 'error');
            });
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
                        {/* <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/pages">Páginas Administradas</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/clinica-giuliani">Clinica Giuliani</Link>
                        </li> */}
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