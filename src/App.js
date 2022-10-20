import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getPokemonsWithDetails, setLoading} from './actions';
import { getPokemon } from './api';
import {Col,Spin} from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons=useSelector(state=>state.pokemons);
  const loading=useSelector(state=>state.loading);
  const dispatch=useDispatch();

useEffect(() => {
 

 fetchPokemons()
 
}, [])



const fetchPokemons=async()=>{
  dispatch(setLoading(true))
  const response=await getPokemon()
 dispatch(getPokemonsWithDetails(response))
 dispatch(setLoading(false))
 };

  return (
    <div className="App">
      <Col span={4} offset={10}><img src={logo} alt='pokemon logo'/></Col>
      <Col span={8} offset={8}>
     <Searcher /> 
     </Col>

     {loading ? 
      <Col offset={12}>
      <Spin spinning size='large'/>
      </Col>:<PokemonList pokemons={pokemons}/>}
    
     
    </div>
  );
}


export default App;
