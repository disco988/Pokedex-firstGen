import React from "react";
import Pokeball from "./pokeball.png";

export default function Header() {
  return (
    <div className="top-bar">
      <img className="pokeball" src={Pokeball} alt="Pokedex" />
    </div>
  );
}
