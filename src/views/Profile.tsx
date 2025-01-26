import { useEffect } from "react";
import { LayoutViews } from "../components/layout/LayoutViews";
import { ProfileData } from "../components/profile/ProfileData";
import { useAppSelector } from "../redux/store";

export const Profile = () => {

    const { user } = useAppSelector(state => state.user)
    const { name, email, pages, instagram, phone } = user;

    useEffect(() => {
        if(!user.email) {
            
        }
    },[])

    return (
        <LayoutViews pageTitle="Perfil de Usuario">
            <div className="row">
                <ProfileData 
                    name={name}
                    email={email}
                    instagram={instagram ?? ''}
                    pagesAdmin={pages}
                    phone={phone ?? ''}
                />
            </div>
        </LayoutViews>
    );
};
