import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setFavorite} from '../actions';
import { StratButton } from './StratButton';

const PokeCart = ({pokemon}) => {

const dispatch=useDispatch();
const typesString=pokemon.types.map((elem)=>elem.type.name).join(', ');

const renderHabilities=(abilities)=>{
  return abilities.map(ability=>ability.ability.name).join(', ');
}

const handleOnFavorite=()=>{
      dispatch(setFavorite({pokemonId:pokemon.id}))
}



  return (
    <Card
    
    title={pokemon.name}
    cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
    extra={<StratButton isFavorite={pokemon.favorite} onClick={handleOnFavorite}/>}
    > 
      <Meta description={`Pokemon type: ${typesString}`}/>
      <Meta description={`Pokemon habilities: ${renderHabilities(pokemon.abilities)}`} /> 
      
    </Card>
  )
}


export { PokeCart}