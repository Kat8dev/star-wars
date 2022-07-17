import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { INFO_DIV } from "../styled/styled";

export default function ShipInfo() {
    let { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/" + id).then(res => {
            setData(res.data);
        });
        axios.get("starwars-visualguide.com").then(res => {
            console.log(res)
        })
    }, [id]);

    return (
        <INFO_DIV>
            <div>
                { /* some images aren't available */}
                <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={"star ship"} />
                <h2>{data.name}</h2>
            </div>
            <div className="data">
                <div>
                    <h5>model: {data.model}</h5>
                    <h5>manufacturer: {data.manufacturer}</h5>
                    <h5>cost_in_credits: {data.cost_in_credits}</h5>
                    <h4>length: {data.length}</h4>
                    <h5>max_atmosphering_speed: {data.max_atmosphering_speed}</h5>
                    <h5>crew: {data.crew}</h5>
                </div>
                <div>
                    <h5>passengers: {data.passengers}</h5>
                    <h5>cargo_capacity: {data.cargo_capacity}</h5>
                    <h5>consumables: {data.consumables}</h5>
                    <h5>hyperdrive_rating: {data.hyperdrive_rating}</h5>
                    <h5>MGLT: {data.MGLT}</h5>
                    <h5>starship_class: {data.starship_class}</h5>
                </div>
            </div>
        </INFO_DIV>
    )
}        
