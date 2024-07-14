import { LayoutViews } from "../components/layout/LayoutViews";
import { useAppSelector } from "../redux/store";

export const Profile = () => {

    const { uid, name, email } = useAppSelector(state => state.auth)

    return (
        <LayoutViews pageTitle="Perfil de Usuario">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="p-2">
                            <div className="card-title">
                                <h5>Información</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex flex-column">
                                    <div>
                                        <strong>Nombre:</strong> <span>{name ?? 'No hay nombre para mostrar'}</span>
                                    </div>
                                    <div>
                                        <strong>Correo:</strong> <span>{email}</span>
                                    </div>
                                    <div>
                                        <strong>Identificador:</strong> <span>{uid}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutViews>
    );
};
