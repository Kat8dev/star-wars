import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { EXTERNAL_LINKS } from "../styled/styled";

const NavBarExternalLinks = () => {
    return (
        <EXTERNAL_LINKS>
            <ul className="STYLED_UL">
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
            </ul>
            <div className="KIDS_DIV">
                <a href="https://starwarskids.com/" target="_blank" rel="noopener noreferrer">
                    KIDS
                </a>
            </div>
        </EXTERNAL_LINKS>
    )

}

export default NavBarExternalLinks;




