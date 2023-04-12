import React from 'react';
import { Link } from "react-router-dom"

function PlaylistCard(props) {
    return (
        <Link to={"/playlist/"+props.id} className="bg-neutral-800 p-6 w-64 rounded-2xl">
            <div className="image-container">
                <img src={"/src/assets/"+props.img} alt={"Capa do album '"+props.nome+"'"} />
            </div>
            <h3 className="pt-4 text-lg">{props.titulo}</h3>
            <p  className="text-neutral-400">{props.quantidade} músicas</p>
        </Link>
    )
}

export default PlaylistCard;