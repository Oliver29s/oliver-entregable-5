import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectPokedes = ({setselectValue}) => {
    const [selectPoke, setselectPoke] = useState()
    useEffect(() => {
        const url ='https://pokeapi.co/api/v2/type'
      axios
      .get(url)
      .then( res => setselectPoke(res.data.results))
      .catch(err => console.log(err))
    
      
    }, [])

   
console.log(selectPoke)

  const hadleChange= (e) =>{
    setselectValue(e.target.value)
  }

  return (
    <div>
        <select onChange={hadleChange}>
            <option value="Select">Select</option>
           {
            selectPoke?.map(select =>(
                <option key={select.url} value={select.url}>{select.name}</option>
            ))
           }
        </select>
    </div>
  )
}

export default SelectPokedes