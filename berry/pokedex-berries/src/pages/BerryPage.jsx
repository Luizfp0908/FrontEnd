import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BerryPage.css";

export default function BerryPage() {
  const [berries, setBerries] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 30;

  useEffect(() => {
    loadBerries();
    
  }, []);

  const loadBerries = () => {
    fetch(`https://pokeapi.co/api/v2/berry?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setBerries((prevBerries) => [...prevBerries, ...data.results]);
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((error) => {
        console.error("Erro ao buscar berries:", error);
      });
  };

  return (
    <div className="berry-page">
      <h1>Lista de Frutas (Berries)</h1>
      <ul className="berry-list">
        {berries.map((berry) => (
          <li key={berry.name}>
            <Link className="berry-link" to={`/berry/${berry.name}`}>
              {berry.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="load-more-button" onClick={loadBerries}>
        Carregar Mais
      </button>
    </div>
  );
}
