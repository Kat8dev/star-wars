import { OVERLAY_STYLES, MODAL_STYLES, MODAL_EXIT_BUTTON, USER_BUTTONS, USER_DIV } from "../styled";
import { useState } from "react";

const LogIn = () => {
    const [ open, setOpen ] = useState({ login: false, signup: false});
    
    return(
       <USER_DIV>
            <USER_BUTTONS>LOG IN</USER_BUTTONS>
            <span>//</span>
            <USER_BUTTONS>SIGN UP</USER_BUTTONS>
       </USER_DIV>
    );
}

export default LogIn;

{/*
     <OVERLAY_STYLES>
            <MODAL_STYLES>
                <MODAL_EXIT_BUTTON onClick={onClose}>X</MODAL_EXIT_BUTTON>
                <p>algo</p>
            </MODAL_STYLES>
        </OVERLAY_STYLES>
*/}