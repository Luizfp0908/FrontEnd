import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PokemonDetailPage.css';

const PokemonDetailPage = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        if (!res.ok) throw new Error('Pokémon não encontrado');
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>

      <Link to="/pokemons" className="back-button">Voltar para Pokémons</Link>
    </div>
  );
};

export default PokemonDetailPage;
