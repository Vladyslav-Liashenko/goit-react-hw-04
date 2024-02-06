import './App.css';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ErrorMassage } from './ErrorMessage/ErrorMassage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { fetchPhoto } from './Services/api';

export const App = () => {
  const accessKey = 'I_SGforXj0P7ovqaJ6GJpJk2xEwutBiTFEwpgZcNd1M';

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = async query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setLoading(false);
    setError(false);
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
        const fetchData = await fetchPhoto(accessKey, query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...fetchData.results]);
        setTotalPage(fetchData.total_pages);
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
      <LoadMoreBtn
        handleLoadMore={handleLoadMore}
        totalPages={totalPages}
        page={page}
      />
      {loading && <Loader />}
      {error && <ErrorMassage />}
    </div>
  );
};
