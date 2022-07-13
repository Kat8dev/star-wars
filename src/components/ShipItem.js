import { SHIP_BOX } from "../styled";
import { Link } from "react-router-dom";

export default function ShipItem(props) {
    return (
        <Link to={"/shipinfo/" + props.id} style={{ color: "#aaa", textDecoration: "none" }}>
            <SHIP_BOX key={props.model}>
                <h3>{props.name}</h3>
                <p>{props.model}</p>
            </SHIP_BOX>
        </Link>
    )
}