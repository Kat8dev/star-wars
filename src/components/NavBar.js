import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBarExternalLinks from "./NavBarExternalLinks";
import LogIn from "./LogIn";


const NavBar = () => {

    return (
        <NAV_CONTAINER>
            <UPPER_BAR_WRAPPER>
                <NavBarExternalLinks/>
                <LOGO />
                <LogIn/>
            </UPPER_BAR_WRAPPER>
            <LINK_BAR>
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
            </LINK_BAR>
        </NAV_CONTAINER >
    )
}

export default NavBar;


export const NAV_CONTAINER = styled.div`
                width: 100%;
                height: auto;
                top: 0;
                `

export const LINK_BAR = styled.nav`
                border-bottom: 1px solid #343434;
                border-top: 1px solid #343434;
                margin-bottom: 20px;
                display: flex;
                justify-content: center;
                `

export const UPPER_BAR_WRAPPER = styled.div`
                max-width: 1400px;
                max-height: 134px;
                margin: 0 auto;
                padding: 20px 0;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                `

export const LOGO = styled.div`
                width: 400px;
                height: 6rem;
                background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png);
                background-size: contain;
                background-repeat: no-repeat;
                `

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