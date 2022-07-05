import { SHIP_BOX } from "../styled";
import { Link } from "react-router-dom";

export default function ShipItem(props) {
    return (

        <Link to={"shipinfo/"} style={{ color: "#aaa", textDecoration: "none" }}>
            <SHIP_BOX key={props.model}>
                <h3><b>Name:</b> {props.name}</h3>
                <h3><b>Model:</b> {props.model}</h3>
            </SHIP_BOX>
        </Link>
    )
}