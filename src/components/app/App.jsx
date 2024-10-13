import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import SearchBar from '../searchBar/SearchBar';
import Loder from '../loader/Loader';
import ErrrMessage from '../errorMessage/ErrorMessage';
import ImageGallery from '../imageGallery/ImageGallery';

import css from './App.module.css';

function App() {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoading(true);
        const responce = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              client_id: 'Gozi7hKDRuFHQPe2kGfSCz7Wn_z4Z8vgzcDhyUSmr-c',
              query: 'car',
              per_page: 12,
            },
          }
        );
        setArticles(responce.data.results);
        console.log(responce.data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, []);

  const onSubmit = searchValue => {
    console.log(searchValue);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={onSubmit} />
      {isLoading && <Loder />}
      {error && <ErrrMessage />}
      <ImageGallery articles={articles} />
    </div>
  );
}

export default App;
