import { Outlet } from "react-router-dom";

export const Home = () => {
    
    return (
        <div className="cms-container">
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};
