import { OVERLAY_STYLES } from "../styled/styled";
import { useState, useEffect } from "react";

const SignupModal = ({ open, onClose }) => {

    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [user, setUser] = useState([]);

    const HandleOnChange = (event) => {
        setInputData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    })

    const HandleOnSubmit = (event) => {
        event.preventDefault();

        const getfromstorage = localStorage.getItem("user");
        const parsedUser = JSON.parse(getfromstorage);

        const found = parsedUser.find(item => item.email === inputData.email);
        if (found === undefined) {
            setUser([
                ...user,
                {
                    firstName: inputData.firstName,
                    lastName: inputData.lastName,
                    email: inputData.email,
                    password: inputData.password
                }
            ]);
            alert("Registration was completed successfully!");
        } else {
            alert("this email address is already in use!")
        }

    }

    return (
        <>
            {
                open ? (<OVERLAY_STYLES>
                    <div className="MODAL_STYLES">
                        <button onClick={onClose}>X</button>
                        <div>
                            <img src="./images/loginlogo.png" alt="star logo" />
                        </div>
                        <div className="header">
                            <h3>CREATE YOUR ACCOUNT</h3>
                        </div>
                        <form className="form" action="#" onSubmit={HandleOnSubmit}>
                            <input type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={inputData.firstName}
                                onChange={HandleOnChange}
                            /> <br />
                            <input type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={inputData.lastName}
                                onChange={HandleOnChange}
                            /><br />
                            <input type="email"
                                placeholder="Email Address"
                                name="email"
                                value={inputData.email}
                                onChange={HandleOnChange}
                            /><br />
                            <input type="password"
                                placeholder="Password"
                                name="password"
                                value={inputData.password}
                                onChange={HandleOnChange}
                            /><br />
                            <input className="submit" type="submit" value="Create Account" />
                        </form>
                    </div>
                </OVERLAY_STYLES>) : null
            }
        </>
    );
}

export default SignupModal;

/*  type={show_input?'text':'password'*/