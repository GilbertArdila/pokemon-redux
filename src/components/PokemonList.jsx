import {PokeCart} from './PokeCart';
import React from 'react';
import './PokemonList.css';



const PokemonList = ({pokemons}) => {
  console.log(pokemons)
  return (
    <div className='PokemonList'>
    {pokemons.map((pokemon)=>{
       return <PokeCart  name={pokemon.name} key={pokemon.name}/>
    })}
    </div>
  )
}

PokemonList.defaultProps={
  pokemons:Array(10).fill(''),
}
export  {PokemonList}