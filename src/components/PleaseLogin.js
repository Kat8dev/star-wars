import { OVERLAY_PLEASE_LOGIN } from "../styled/styled";
import { Link } from "react-router-dom";

const PleaseLogin = () => {

    return (
        <OVERLAY_PLEASE_LOGIN>
            <div className="MODAL_STYLES">
                <div className="header">
                    <h3>Please log in first!</h3>
                </div>
                <div className="div_link">
                    <Link className="LINK" to="/">Home Page</Link>
                </div>
            </div>
        </OVERLAY_PLEASE_LOGIN>
    )
}

export default PleaseLogin;