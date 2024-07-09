// import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
// export type ContextCMSType = {
//     isLoading: boolean;
//     handleLoading: (value:boolean) => void;
// }
// export const ContextCMS = createContext<ContextCMSType>({
//     isLoading: false, // set a default value
//     handleLoading: () => { },
// })

// export const useContextCMS = () => useContext(ContextCMS)

// interface Props {
//     children: ReactNode
// }


// export const ContextCMSProvider = ({ children }: Props) => {

//     const [isLoading, setIsLoading] = useState<boolean>(false)

//     const handleLoading = (value: boolean) => setIsLoading(value)

//     return (
//         <ContextCMS.Provider value={{isLoading, handleLoading}}>
//             {children}
//         </ContextCMS.Provider>
//     )
// }
