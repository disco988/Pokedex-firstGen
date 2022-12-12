import React from "react";
import Pokeball from "./pokeball.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="pokemon-img" src={props.img} alt="" />
      <p className="pokemon-name">{props.name}</p>
      <p className="pokemon-id">id:{props.id}</p>
      <p className="pokemon-type">type: {props.type}</p>
    </div>
  );
}
