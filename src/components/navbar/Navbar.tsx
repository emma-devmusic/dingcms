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
                Swal.fire('Error', 'Hubo un error para salir de la sesion', 'error');
            });
    }

    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/concejo-del-municipio">Concejo De Charata</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/clinica-giuliani">Clinica Giuliani</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-primary" onClick={handleLogout}>
                        Salir
                    </button>
                </div>
            </div>
        </nav>
    );
};
