import { ReactNode, Suspense } from "react";
import { Navbar } from "../navbar/Navbar";
import { auth } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Spinner } from "../spinner/Spinner";

export const Layout = ({ children }: { children: ReactNode }) => {
    
    const navigate = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (!user) navigate('/login') 
    })

    return (
        <div>
            <Suspense fallback={<Spinner />}>
                <Navbar />
                {children}
            </Suspense>
        </div>
    );
};
