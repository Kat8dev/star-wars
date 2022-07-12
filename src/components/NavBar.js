import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return (
        <NAV_CONTAINER>
            <UPPER_BAR_WRAPPER>
                <EXTERNAL_LINKS>
                
                  {/*<Link to={{pathname: "https://www.facebook.com/StarWars" }} target="_blank" > <span>algo</span> </Link>*/}
                  <Link to={{pathname:`${"https://www.facebook.com/StarWars"}`}}>View</Link>
              
                </EXTERNAL_LINKS>
                <LOGO />
            </UPPER_BAR_WRAPPER>
            <LINK_BAR>
                <Link className="APP_LINKS" to="/">Welcome</Link>
                <Link className="APP_LINKS" to="/ShipList">Ship List</Link>
            </LINK_BAR>
        </NAV_CONTAINER>
    )
}

export default NavBar;


export const NAV_CONTAINER = styled.div`
    width: 100%;
    height: auto;
    top: 0;
`

export const LINK_BAR = styled.nav`
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

export const UPPER_BAR_WRAPPER = styled.div`
    max-width: 1400px;
    max-height: 134px;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
    
`

export const EXTERNAL_LINKS = styled.div`
    width: 400px;
`

export const LOGO = styled.div`
    width: 100%;
    max-width: 203px; 
    height: 6rem;
    margin: 6px auto 0;
    background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png);
    background-size: contain;
    background-repeat: no-repeat;
`

export const LOG_IN = styled.div`
    width: 200px;
`
