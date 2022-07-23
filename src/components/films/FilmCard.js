import { useEffect, useState } from "react";
import axios from "axios";

const FilmCard = ({ url }) => {

    const [data, setData] = useState("");

    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data);
            console.log(res);
        });
    })

    return (
        <div>
            <h4>Title: {data.title}</h4>
            <h4>episode: {data.episode_id}</h4>
            <h4>Director: {data.director}</h4>
            <h4>Producer: {data.producer}</h4>
            <h4>release date: {data.release_date}</h4>
        </div>
    )
}

export default FilmCard;