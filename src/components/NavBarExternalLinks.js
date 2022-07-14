import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const NavBarExternalLinks = () => {
    return (
        <EXTERNAL_LINKS>
            <STYLED_UL>
                <a href="https://www.facebook.com/StarWars" target="_blank" rel="noreferrer">
                    <span><BsFacebook /></span>
                </a>

                <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">
                    <span><BsInstagram /></span>
                </a>

                <a href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer" >
                    <span><BsTwitter /></span>
                </a>

                <a href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener noreferrer">
                    <span ><BsYoutube /></span>
                </a>
            </STYLED_UL>
            <KIDS_DIV>
                <a href="https://starwarskids.com/" target="_blank" rel="noopener noreferrer">
                    KIDS
                </a>
            </KIDS_DIV>
        </EXTERNAL_LINKS>
    )

}

export default NavBarExternalLinks;

export const EXTERNAL_LINKS = styled.div`
                flex: 0 1 auto;
                width: 400px;
                display: flex;
                justify-content: center; 
                `

export const KIDS_DIV = styled.div` 
    background-color: #aaa;
    width: 50px;
    height: 22px;
    color: black;
    font-weight: 900;
    border-radius: 10px;
    margin: 18px 10px;
    a{
        color: black;
        text-decoration: none;
    }
`

export const STYLED_UL = styled.ul`
    height: fit-content;
    display: flex;
    border-right: solid 1px #343434;
    a{
        margin: 0 10px;
        span{
            color: #aaa;
            font-size: 1.5rem;      
        }
    }
`