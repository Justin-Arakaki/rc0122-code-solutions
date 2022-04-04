import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const listItems = pokedex.map(pokemon =>
  <li key={pokemon.number}>
    {pokemon.name}
  </li>
);
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const list = <ul>{listItems}</ul>;

root.render(list);
