import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokerCard from "../components/pokedes/PokerCard";

const Pokedes = () => {
  const { nameTrainer } = useSelector((state) => state);
  const [pokemons, setpokemons] = useState();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";
    axios
      .get(url)
      .then((res) => setpokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div> 
      <header>
        <img src="/imagenes/Diagram-React.png" alt="" />
      </header>
      <h1>
        <span>Hi {nameTrainer}</span>, here find yor favorite pokemon
      </h1>
      <div>
        {
          pokemons?.results.map(pokemon =>(
            <PokerCard key={pokemon.url} 
            pokemon={pokemon}
            />
          )) 
        }
      </div>
    </div>
  );
};

export default Pokedes;
