import { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";
import { auth } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export const Layout = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (!user) navigate('/login')
    })

    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};
