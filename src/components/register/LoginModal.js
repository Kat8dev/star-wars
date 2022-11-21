import { OVERLAY_STYLES } from "../../styled/styled";
import { useState, useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import Inputs from "./Inputs";

const LoginModal = ({ open, onClose }) => {
    const [ user, setUser ] = useState({
        email: "",
        password: "",
        isLoged: false, 
    });

   const { setLoged } = useContext(UserContext);
   if(user.isLoged) return setLoged(true); 

   const inputsData = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character",
        pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
        required: true,
    },
];
   

   const handleOnChange = (event) => {
        setUser(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const HandleOnSubmit = () => {
       
        const getfromstorage = localStorage.getItem("user");
        const parsedUser = JSON.parse(getfromstorage);

        const found = parsedUser.find(item => item.email === user.email);

        if(found !== undefined && found.password === user.password) {       
            setUser(prev => {
                return {
                    ...prev,
                    isLoged: !user.isLoged 
                }
            })
            alert(`Welcome ${found.firstName}!`);
        }else {
            alert("please sign up!");
        }
    }
   
    return (
        <>
            {
                open ? <OVERLAY_STYLES>
                    <div className="MODAL_STYLES">
                        <button onClick={onClose}>X</button>
                        <div>
                            <img src="./images/loginlogo.png" alt="star logo" />
                        </div>
                        <div className="header">
                            <h3>LOG IN</h3>
                        </div>
                        <form className="form" action="#" onSubmit={HandleOnSubmit}>
                            {
                                inputsData.map(input => (
                                    <Inputs key={input.id} {...input} value={user[input.name]} onChange={handleOnChange} />
                                ))
                            }
                            <input className="submit" type="submit" value="Log In" />
                        </form>
                    </div>
                </OVERLAY_STYLES> : null
            }
        </>
    );
}

export default LoginModal;

