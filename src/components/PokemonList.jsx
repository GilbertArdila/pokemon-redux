import {PokeCart} from './PokeCart';
import React from 'react';
import './PokemonList.css';



const PokemonList = ({pokemons}) => {

 
  
  return (
    <div className='PokemonList'>
    {pokemons.map((pokemon)=>{
       return <PokeCart  
       name={pokemon.name} 
       image={pokemon.sprites.front_default} 
       abilities={pokemon.abilities}
       types={pokemon.types}
       id={pokemon.id}
       favorite={pokemon.favorite}
      
       key={pokemon.name}/>
       
    })}
    </div>
  )
}

PokemonList.defaultProps={
  pokemons:Array(10).fill(''),
}
export  {PokemonList}