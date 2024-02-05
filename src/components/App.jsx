import axios from 'axios';
import './App.css';
import { SearchBar } from './SearchBar/SearchBar';
import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ErrorMassage } from './ErrorMessage/ErrorMassage';

export const App = () => {
  const accessKey = 'I_SGforXj0P7ovqaJ6GJpJk2xEwutBiTFEwpgZcNd1M';

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = async query => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}`
      );
      setPhotos(response.data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  console.log(photos);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {loading && <Loader />}
      {error && <ErrorMassage/>}
    </div>
  );
};
