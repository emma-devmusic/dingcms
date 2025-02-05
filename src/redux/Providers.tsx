import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode, useEffect } from "react";
import { setSelectedEntity } from "./slice/entitySlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/auth";
import { logout, setAuth } from "./slice/authSlice";
import { isExpired } from "../helpers/functions";
import Swal from "sweetalert2";
import { getUserData } from "./slice/userSlice";
import { Entity } from "../types/store";

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
                if(!store.getState().user.user.email){
                    store.dispatch( getUserData(user.email ?? '') )
                    store.dispatch(
                        setAuth({
                            uid: user.uid,
                            email: user.email,
                            name: user.displayName
                        }))
                }
            } else {
                store.dispatch(logout())
            }
        })
    }, [])

    useEffect(() => {
        const entityInLS: Entity = JSON.parse(localStorage.getItem('entity-selected') ?? '{}')
        if (entityInLS.slug) store.dispatch(setSelectedEntity(entityInLS))
    }, [])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
