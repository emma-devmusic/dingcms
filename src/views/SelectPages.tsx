import { Link } from "react-router-dom"


export const SelectPages = () => {
    return (
        <div className="cms-container">
            <div className="p-4">
                <h3>Selecciona una página para administrar sus Blogs</h3>
                <hr />
                <ul>
                    <li><Link to={'/pages/clinica-giuliani'}>Clínica Giuliani</Link></li>
                    <li><Link to={'/pages/concejo-charata'}>Concejo de Charata</Link></li>
                </ul>
            </div>
        </div>
    )
}
