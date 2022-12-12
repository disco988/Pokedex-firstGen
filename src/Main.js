import React from "react";
import Card from "./Card";
import axios from "axios";

export default function Main() {
  const [allPokemons, setAllPokemons] = React.useState([]);





  const getAllPokemon = async (limit = 151) => {
    const {
      data: { results },
    } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: { limit },
    });
  
    return Promise.all(
      results.map(async ({ url }) => (await axios.get(url)).data)
    );
  };


  React.useEffect(() => {
    getAllPokemon().then(setAllPokemons).catch(console.error);
  }, []);


  const pokemonCard = allPokemons.map((pokemon) => (
    <Card
      name={pokemon.name}
      key={pokemon.id}
      id={pokemon.id}
      img={pokemon.sprites.front_default}
      type={pokemon.types[0].type.name}
    />
  ));

  return <div className="main-container">{pokemonCard}</div>;
}
