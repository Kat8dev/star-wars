import { OVERLAY_STYLES } from "../../styled/styled";
import { useState, useEffect } from "react";
import Inputs from "./Inputs";

const SignupModal = ({ open, onClose }) => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [user, setUser] = useState([]);

    const HandleOnChange = (event) => {
        setValues(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const inputsData = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confim Password",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
        },
    ];

    const HandleOnSubmit = (event) => {
        event.preventDefault();

        const getfromstorage = localStorage.getItem("user");
        const parsedUser = JSON.parse(getfromstorage);
        const found = parsedUser.find(item => item.email === values.email);

        if (found === undefined) {
            setUser([
                ...user,
                {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                }
            ]);
            alert("Registration was completed successfully!");
        } else {
            alert("this email address is already in use!")
        }
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user])

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
                            {
                                inputsData.map(input => (
                                    <Inputs key={input.id} {...input} value={values[input.name]} onChange={HandleOnChange} />
                                ))
                            }
                            <input className="submit" type="submit" value="Sign Up" />
                        </form>
                    </div>
                </OVERLAY_STYLES>) : null
            }
        </>
    );
}

export default SignupModal;
