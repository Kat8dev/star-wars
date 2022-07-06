import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShipInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/starships/?page=${data}`)
        .then((res) => {
          setData((prev) => prev.concat(res.data.results))
        })
    }, [data])

    let numberPattern = /\d+/g;

    let params = useParams();

    return(
        <div>
            <h4>name: </h4>
            <h4>model: </h4>
            <h4>manufacturer: </h4>
            <h4>cost_in_credits: </h4>
            <h4>length: </h4>
            <h4>max_atmosphering_speed: </h4>
            <h4>crew: </h4>
            <h4>passengers: </h4>
            <h4>cargo_capacity: </h4>
            <h4>consumables: </h4>
            <h4>hyperdrive_rating: </h4>
            <h4>MGLT: </h4>
            <h4>starship_class: </h4>
        </div>
    )
}        
