import { OVERLAY_STYLES } from "../styled/styled";
import { useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const LoginModal = ({ open, onClose }) => {
    const [ user, setUser ] = useState({
        email: "",
        password: "",
        isLoged: false, 
    });

    /* I don't get why I can't change value of useContext inside conditional of HandleOnSubmit func; */
   const { setLoged } = useContext(UserContext);
   if(user.isLoged) return setLoged(true); 
   

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

