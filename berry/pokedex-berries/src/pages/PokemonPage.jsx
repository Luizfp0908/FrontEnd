import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PokemonPage.css';

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const LIMIT = 50;

  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar Pokémons:', error);
        setLoading(false);
      });
  }, []); 

  
  const loadMorePokemons = () => {
    setIsLoadingMore(true);
    const newOffset = offset + LIMIT;

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${newOffset}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons((prevPokemons) => [...prevPokemons, ...data.results]);
        setOffset(newOffset);
        setIsLoadingMore(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar mais Pokémons:', error);
        setIsLoadingMore(false);
      });
  };

  if (loading) return <p>Carregando Pokémons...</p>;

  return (
    <div className="pokemon-page">
      <h1>Lista de Pokémons</h1>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      <button 
        onClick={loadMorePokemons} 
        disabled={isLoadingMore}
        className="load-more-button"
      >
        {isLoadingMore ? 'Carregando...' : 'Carregar Mais'}
      </button>
    </div>
  );
};

export default PokemonPage;
