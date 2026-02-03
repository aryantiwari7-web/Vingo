import { createContext ,useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = (props) =>{
    const [auth,setAuth] = useState(null);
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {props.children}
        </AuthContext.Provider>
    );
}