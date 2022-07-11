import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShipInfo() {
    let { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
		axios.get("https://swapi.dev/api/starships/" + id).then(res => {
			setData(res.data);
		});
	}, [id]);

    return(
        <div>
            <h4>name: {data.name}</h4>
            <h4>model: {data.model}</h4>
            <h4>manufacturer: {data.manufacturer}</h4>
            <h4>cost_in_credits: {data.cost_in_credits}</h4>
            <h4>length: {data.length}</h4>
            <h4>max_atmosphering_speed: {data.max_atmosphering_speed}</h4>
            <h4>crew: {data.crew}</h4>
            <h4>passengers: {data.passengers}</h4>
            <h4>cargo_capacity: {data.cargo_capacity}</h4>
            <h4>consumables: {data.consumables}</h4>
            <h4>hyperdrive_rating: {data.hyperdrive_rating}</h4>
            <h4>MGLT: {data.MGLT}</h4>
            <h4>starship_class: {data.starship_class}</h4>
        </div>
    )
}        
