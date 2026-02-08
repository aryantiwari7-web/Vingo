import { createContext ,useState } from "react";

export const OTPContext = createContext(null);

export const OTPProvider = (props) =>{
    const [state,setState] = useState(null);
    return(
        <OTPContext.Provider value={{state,setState}}>
            {props.children}
        </OTPContext.Provider>
    );
}