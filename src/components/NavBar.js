import { NavLink } from "react-router-dom";
import { NAV_CONTAINER } from "../styled/styled";
import NavBarExternalLinks from "./NavBarExternalLinks";
import LoginSignup from "./LoginSignup";


const NavBar = () => {

    return (
        <NAV_CONTAINER>
            <div className="UPPER_BAR_WRAPPER">
                <NavBarExternalLinks />
                <div className="LOGO">
                    <img
                     src={"https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"}
                     alt={"LOGO"}/>
                </div>
                <LoginSignup />
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