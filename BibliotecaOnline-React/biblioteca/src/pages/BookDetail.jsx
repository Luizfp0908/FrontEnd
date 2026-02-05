import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const [book, setBook] = useState(null);
  const [coverId, setCoverId] = useState(null);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((res) => {
        setBook(res.data);
        if (res.data.covers && res.data.covers.length > 0) {
          setCoverId(res.data.covers[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p>Carregando...</p>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      {coverId && (
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
          alt={book.title}
        />
      )}
      <p>
        {book.description
          ? typeof book.description === 'string'
            ? book.description
            : book.description.value
          : 'Sem descrição disponível.'}
      </p>

      {query && (
        <Link to={`/search/${query}`} className="back-button">
          Voltar para resultados
        </Link>
      )}
    </div>
  );
};

export default BookDetail;
