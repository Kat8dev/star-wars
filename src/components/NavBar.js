import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return (
        <NAV_CONTAINER>
            <UpperBar>
                
            </UpperBar>
            <LinkBar>
                <Link className="APP_LINKS" to="/">Welcome</Link>
                <Link className="APP_LINKS" to="/ShipList">Ship List</Link>
            </LinkBar>
        </NAV_CONTAINER>
    )
}

export default NavBar;

export const NAV_CONTAINER = styled.div`
    width: 100%;
    height: auto;
    top: 0;
`

export const LinkBar = styled.nav`
    left: 0;
    width: 100%;
    height: auto;
    padding: 0;
    overflow-y: hidden;
    position: relative;
    visibility: visible;
    opacity: 1;
    background-color: #000;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    border-top: 1px solid #343434;
`

export const UpperBar = styled.div`
    max-width: 1400px;
    max-height: 134px;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
    background-image: url(images/star-wars-logo.jpg);
`

