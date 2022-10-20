import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setFavorite, setFavoriteArray } from '../actions';
import { StratButton } from './StratButton';

const PokeCart = ({name,image,abilities,types,id,favorite}) => {

const dispatch=useDispatch();
const typesString=types.map((elem)=>elem.type.name).join(', ');

const renderHabilities=(abilities)=>{
  return abilities.map(ability=>ability.ability.name).join(', ');
}

const handleOnFavorite=()=>{
      dispatch(setFavorite({pokemonId:id}))
     
      
      
}
  return (
    <Card
    
    title={name}
    cover={<img src={image} alt={name}/>}
    extra={<StratButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    > 
      <Meta description={`Pokemon type: ${typesString}`}/>
      <Meta description={`Pokemon habilities: ${renderHabilities(abilities)}`} /> 
      
    </Card>
  )
}


export { PokeCart}