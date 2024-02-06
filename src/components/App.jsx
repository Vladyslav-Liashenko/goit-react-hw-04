import axios from 'axios';
import './App.css';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ErrorMassage } from './ErrorMessage/ErrorMassage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

export const App = () => {
  const accessKey = 'I_SGforXj0P7ovqaJ6GJpJk2xEwutBiTFEwpgZcNd1M';

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false);

  const searchImages = async query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setLoading(false);
    setError(false);
    setSearched(true);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}`
        );
        setPhotos(prevPhotos => [...prevPhotos, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {loading && <Loader />}
      <LoadMoreBtn handleLoadMore={handleLoadMore}
      showButton={searched} 
        noMorePages={photos.length < page * 10} />
      {error && <ErrorMassage />}
    </div>
  );
};