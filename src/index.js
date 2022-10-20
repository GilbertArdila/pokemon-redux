import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import { pokemonsReducer } from './reducers/pokemons';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composedAlt=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
const composedEnhancers=composedAlt(applyMiddleware(thunk));
const store=createStore(pokemonsReducer,composedEnhancers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
   
  </React.StrictMode>
);


