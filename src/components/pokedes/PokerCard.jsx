import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokerCard = ({ pokemon }) => {
  const [endPointPokemon, setendPointPokemon] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setendPointPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
 

  const handleClickk = () => {
    navigate(`/pokedes/${endPointPokemon.id}`);
  };
  return (
    <div
      onClick={handleClickk}
      className={`poke__cards ${endPointPokemon?.types[0].type.name}`}
    >
      <div className="contain__endpoint">
        <header className="poke__header">
          <h2>{endPointPokemon?.name}</h2>
          <img
            src={
              endPointPokemon?.sprites.other["official-artwork"].front_default
            }
            alt=""
          />
        </header>

        <div className="contain__h6">
          {endPointPokemon?.types?.map((type) => (
            <>
              <h6 key={type.type.name}></h6>
              <h6> / {type.type.name}</h6>
            </>
          ))}
        </div>

        <div className="ul__poke">
          {endPointPokemon?.stats?.map((stat) => (
            <p key={stat.stat.name} className="li_poke">
              <span>{stat.stat.name}</span>
              <span className="stat__poke">{stat.base_stat}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokerCard;
