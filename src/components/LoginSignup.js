import { USER_DIV } from "../styled/styled";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const LoginSignup = () => {
    const [open, setOpen] = useState({ login: false, signup: false });

    function OnClickHandler(id) {
        if(id === 1) {
            setOpen(prev => ({
            ...prev,
            login: !open.login
          }));
        }else {
            setOpen(prev => ({
                ...prev,
                signup: !open.signup
              }));
        }
        
    }

    return (

        <USER_DIV>
            <button onClick={()=>OnClickHandler(1)}>LOG IN</button>
            <span>//</span>
            <button onClick={()=>OnClickHandler(2)}>SIGN UP</button>
            <LoginModal
                open={open.login}
                onClose={() => setOpen(prev => ({...prev, login: !open.login}))}
            />
            <SignupModal
                open={open.signup}
                onClose={() => setOpen(prev => ({...prev, signup: !open.signup}))}
            />
        </USER_DIV>
    );
}

export default LoginSignup;

