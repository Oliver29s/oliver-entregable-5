import axios from "axios";
import React, { useEffect, useState } from "react";

const PokerCard = ({ pokemon }) => {
  const [endPointPokemon, setendPointPokemon] = useState();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setendPointPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(endPointPokemon);
  return (
    <div className="poke__cards">
      <header className="poke__header">
        <img
          src={endPointPokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <h2>{endPointPokemon?.name}</h2>
      <ul>
        {endPointPokemon?.types?.map((type) => (
          <li key={type.type.name}> {type.type.name}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {endPointPokemon?.stats?.map((stat) => (
          <li key={stat.stat.url}>
            <span>{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default PokerCard;
