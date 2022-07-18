import { OVERLAY_STYLES } from "../styled/styled";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const LoginModal = ({ open, onClose }) => {
    const [ user, setUser ] = useState({
        email: "",
        password: "",
    });

    const { loged, setLoged } = useContext(UserContext);

    const HandleOnChange = (event) => {
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
            setLoged(true); 
            console.log(loged)     
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
                            <input type="email"
                                placeholder="Email Address"
                                name="email"
                                value={user.email}
                                onChange={HandleOnChange}
                            /><br />
                            <input type="password"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={HandleOnChange}
                            /><br />
                            <input className="submit" type="submit" value="Log In" />
                        </form>
                    </div>
                </OVERLAY_STYLES> : null
            }
        </>
    );
}

export default LoginModal;