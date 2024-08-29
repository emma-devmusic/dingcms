import { ReactNode } from "react";

export const LayoutViews = ({ pageTitle, children }: { pageTitle: string; children: ReactNode}) => {


    return (
        <div className="p-4">
            <div className="pb-4">
                <h3 className="">{pageTitle}</h3>
                <hr />
            </div>
                {children}
        </div>
    );
};
