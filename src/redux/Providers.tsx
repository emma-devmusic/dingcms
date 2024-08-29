import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode, useEffect } from "react";
import { setSelectedEntity } from "./slice/entitySlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/auth";
import { logout, setAuth } from "./slice/authSlice";
import { isExpired } from "../helpers/functions";
import Swal from "sweetalert2";

export const Providers = ({ children }: { children: ReactNode }) => {


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdTokenResult().then((token) => {
                    if (isExpired(token.expirationTime)) {
                        signOut(auth).then(() => {
                            Swal.fire('Sesión Expirada', 'Vuelve a iniciar sesión', 'info')
                        })
                    }
                });
                store.dispatch(
                    setAuth({
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName,
                        image: user.photoURL,
                        phone: user.phoneNumber,
                        instagram: '',
                    }))
            } else {
                store.dispatch(logout())
            }
        })
    }, [])

    useEffect(() => {
        const entitySelected = JSON.parse(localStorage.getItem('entity-selected') ?? '{}')
        if (entitySelected.slug) store.dispatch(setSelectedEntity(entitySelected))
    }, [])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
