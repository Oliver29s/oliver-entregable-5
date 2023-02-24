import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hidden from "../store/slices/hidden";

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
    <div className="info__contain">
      <div>
        <img src={hidden} alt="" />
        <img
          src={poke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div>
          <p>Weight {poke?.weight}</p>
          <p>Height{poke?.height}</p>
          <h3>{poke?.name}</h3>
        </div>
      </div>
      <section>
        <h3>Types</h3>
        <div>{poke?.types[0].type.name}</div>
        <div>{poke?.types[1].type.name}</div>
      </section>
      <article>
        <h3>Abilities</h3>
        <div>{poke?.abilities[0].ability.name}</div>
        <div>{poke?.abilities[1].ability.name}</div>
      </article>
      <div>
        <h3>Stat</h3>
        {poke?.stats?.map((stat) => (
          <p key={stat.stat.url}>{stat.stat.name}
          {}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokeInfo;
