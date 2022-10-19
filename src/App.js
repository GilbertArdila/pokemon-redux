import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { setPokemons} from './actions';
import { getPokemon } from './api';
import {Col} from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons=useSelector(state=>state.pokemons);
  const dispatch=useDispatch();
  console.log(pokemons)

useEffect(() => {
 

 fetchPokemons()
 
}, [])

const fetchPokemons=async()=>{
  const response=await getPokemon()
 dispatch(setPokemons(response))
 };

  return (
    <div className="App">
      <Col span={4} offset={10}><img src={logo} alt='pokemon logo'/></Col>
      <Col span={8} offset={8}>
     <Searcher/> 
     </Col>
     <PokemonList pokemons={pokemons}/>
    </div>
  );
}


export default App;
