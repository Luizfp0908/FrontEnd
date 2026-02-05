import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const { query } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/search.json?q=${query}`)
      .then((res) => setBooks(res.data.docs.slice(0, 10))) // Mostrando os 10 primeiros
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div>
      <h2>Resultados para: "{query}"</h2>
      <ul>
  {books.map((book) => (
    <li key={book.key}>
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
        />
      )}
      <div>
        <Link to={`/book/${book.key.replace('/works/', '')}?query=${query}`}>
          <h3>{book.title}</h3>
        </Link>
        <p>
          {book.author_name ? book.author_name.join(', ') : 'Autor desconhecido'}
        </p>
        {book.first_publish_year && <p>Ano: {book.first_publish_year}</p>}
        {book.subject && (
          <p>Assuntos: {book.subject.slice(0, 3).join(', ')}...</p>
        )}
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default SearchResults;
