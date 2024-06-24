import React from 'react';
const NavBar = ({ pokemonList, handleClick }) => {

    return (<div>
        {pokemonList.map((pokemon, index) => (
            <button key={pokemon.name} onClick={() => handleClick(index)}> {pokemon.name} </button>

        ))}
    </div>);
};

export default NavBar;
