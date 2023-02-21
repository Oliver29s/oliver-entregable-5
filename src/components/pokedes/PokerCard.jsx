import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokerCard = ({pokemon}) => {

    const [endPointPokemon, setendPointPokemon] = useState()

    useEffect(() => {
      axios
      .get(pokemon.url)
      .then(res => setendPointPokemon(res.data) )
      .catch(err => console.log(err))
    
    }, [])
    console.log(endPointPokemon)
  return (
    <div>
        <p>{pokemon.name}</p>
    </div>
  )
}

export default PokerCard