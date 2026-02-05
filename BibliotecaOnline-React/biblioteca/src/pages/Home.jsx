import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      navigate(`/search/${search}`);
    }
  };

  return (
    <div>
      <h1>Biblioteca Online</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar livro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Home;
