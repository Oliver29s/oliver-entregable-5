import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokerCard from "../components/pokedes/PokerCard";

const Pokedes = () => {
  const { nameTrainer } = useSelector((state) => state);
  const [pokemons, setpokemons] = useState();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=250&offset=0";
    axios
      .get(url)
      .then((res) => setpokemons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className="header">
        <div className="contain__img">
          <img src="/imagenes/Diagram-React.png" alt="" />
        </div>
      </header>
      <div className="contain__trainer">
        <h1 className="h1__title">
          <span className="span__title">Hi {nameTrainer}</span>, here find yor favorite pokemon
        </h1>
      </div>
      <div className="contain__cards">
        {pokemons?.results.map((pokemon) => (
          <PokerCard key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Pokedes;
