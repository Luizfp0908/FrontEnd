import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BerryPage from './pages/BerryPage';
import BerryDetailPage from './pages/BerryDetailPage';
import PokemonPage from './pages/PokemonPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import './Nav.css';

const App = () => {
  return (
    <Router>
      <nav>
        <div className="logo">Pokedex</div>
        <div className="nav-links">
          <Link to="/">Berries</Link>
          <Link to="/pokemons">Pokémons</Link> 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<BerryPage />} />
        <Route path="/berry/:berryName" element={<BerryDetailPage />} />
        <Route path="/pokemons" element={<PokemonPage />} /> {}
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} /> {}
      </Routes>
    </Router>
  );
};

export default App;
