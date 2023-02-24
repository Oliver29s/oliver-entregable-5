import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hidden from "../store/slices/hidden";
import "./styles/pokeInfo.css"

const PokeInfo = () => {
  const { id } = useParams();
  const [poke, setPoke] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(poke);

  return (
    <main className={`main__info ${poke?.types[0].type.name}`}>

    <div className={`info__contain ${poke?.types[0].type.name}` } >
      <div className={`info__title ${poke?.types[0].type.name}`}>
        <img src={hidden} alt="" />
        <img
          src={poke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div className="info__name">
          <p> {poke?.weight} <span>Weight</span></p>
          <p>{poke?.height}<span>Height</span></p>
          
        </div>
        <h3>{poke?.name}</h3>
      </div>
      <section className="section__all">

      <section className={`section__info ${poke?.types[0].type.name}`}>
        <h3>Types</h3>
        <div className="type">

        <div className="type__0 rock">{poke?.types[0]?.type.name}</div>
        <div className="type__1 steel" >{poke?.types[1]?.type.name}</div>
        </div>
      </section>
      <article  className={`section__info ${poke?.types[0].type.name}`} >
        <h3>Abilities</h3>
        <div className="type">

        <div className="type__0 rock">{poke?.abilities[0]?.ability.name}</div>
        <div className="type__1 steel">{poke?.abilities[1]?.ability.name}</div>
        </div>
      </article>
      <div className={`section__info ${poke?.types[0].type.name}`}>
        <h3>Stats</h3>
        <div className="stat__info">
          
        {poke?.stats?.map((stat) => (
          <p key={stat.stat.url}>{stat.stat.name}
          
          </p>
        ))}
        </div>
      </div>
      </section>
    </div>
    </main>
  );
};

export default PokeInfo;
