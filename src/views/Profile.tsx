import { LayoutViews } from "../components/layout/LayoutViews";
import { ProfileData } from "../components/profile/ProfileData";
import { useAppSelector } from "../redux/store";

export const Profile = () => {

    const { uid, name, email } = useAppSelector(state => state.auth)

    return (
        <LayoutViews pageTitle="Perfil de Usuario">
            <div className="row">
                <ProfileData 
                    name={name}
                    email={email}
                    instagram=""
                    pagesAdmin={[]}
                    uid={uid}
                />
            </div>
        </LayoutViews>
    );
};
