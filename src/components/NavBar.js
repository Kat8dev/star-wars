import { NavLink } from "react-router-dom";
import { NAV_CONTAINER } from "../styled/styled";
import NavBarExternalLinks from "./NavBarExternalLinks";
import LoginSignup from "./register/LoginSignup";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {

    const handleClick = () => {
        
    }

    return (
        <NAV_CONTAINER>
            <div className="UPPER_BAR_WRAPPER">
                <div className="external_links">
                    <NavBarExternalLinks />
                </div>
                <div className="LOGO">
                    <img
                        src={"https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"}
                        alt="LOGO" />
                </div>
                <div className="login_signup">
                    <LoginSignup />
                </div>
                <div className="hamburger" onClick={handleClick}>
                    <GiHamburgerMenu />
                </div>
            </div>
            <div className="LINK_BAR">
                <NavLink to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                    }>
                    Welcome
                </NavLink>
                <NavLink to="/ShipList"
                    style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                    }>
                    Ship List
                </NavLink>
            </div>
        </NAV_CONTAINER >
    )
}

export default NavBar;

export const activeStyle = {
    margin: "10px",
    color: "white",
    fontSize: 20,
    textDecoration: "none",
    borderBottom: "solid #4169E1 2px",
}

export const nonActiveStyle = {
    margin: "10px",
    textDecoration: "none",
    color: "#aaa",
}