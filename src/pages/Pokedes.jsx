import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokerCard from "../components/pokedes/PokerCard";
import SelectPokedes from "../components/SelectPokedes";

const Pokedes = () => {
  const { nameTrainer } = useSelector((state) => state);
  const [pokemons, setpokemons] = useState();
  const [selectValue, setselectValue] = useState("Select");
  console.log(selectValue);
  let navigate = useNavigate();

  useEffect(() => {
    if (selectValue === "Select") {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=250&offset=0";
      axios
        .get(url)
        .then((res) => setpokemons(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(selectValue)
        .then((res) => {
          const results = res.data?.pokemon?.map((e) => e.pokemon);
          setpokemons({ results });
        })
        .catch((err) => console.log(err));
    }
  }, [selectValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokedes/${e.target.pokedesID.value.trim().toLowerCase()}`);
    e.target.names.value = "";
  };

  return (
    <>
      <div className="contain__form-select">
        <form onSubmit={handleSubmit} className="">
          <input id="pokedesID" type="text" className="input" />
          <button className="btn plus">Start</button>
        </form>
        <SelectPokedes setselectValue={setselectValue} />
      </div>

      <div className="contain__trainer">
        <h1 className="h1__title">
          <span className="span__title">Hi {nameTrainer}</span>, yor pokemon is:
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
