import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BerryDetailPage.css";

const BerryDetailPage = () => {
  const { berryName } = useParams();
  const [berry, setBerry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/berry/${berryName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Berry não encontrada.");
        }
        return response.json();
      })
      .then((data) => {
        setBerry(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar a berry:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [berryName]);

  if (loading) return <p>Carregando detalhes da berry...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="berry-detail-page">
      <h1>Detalhes da Berry: {berry.name}</h1>
      <ul>
        <li><strong>Tamanho:</strong> {berry.size}</li>
        <li><strong>Suavidade:</strong> {berry.smoothness}</li>
        <li><strong>Potência de Sabor:</strong> {berry.flavors.map(flavor => (
          <div key={flavor.flavor.name}>
            {flavor.flavor.name}: {flavor.potency}
          </div>
        ))}</li>
      </ul>
      <Link className="back-button" to="/">Voltar para a lista</Link>
    </div>
  );
};

export default BerryDetailPage;
