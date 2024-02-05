import axios from 'axios';
import './App.css';
import { SearchBar } from './SearchBar/SearchBar';
import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const accessKey = 'I_SGforXj0P7ovqaJ6GJpJk2xEwutBiTFEwpgZcNd1M';

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchImages = async query => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}`
      );
      setPhotos(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log('error getting:', error);
    }
  };
  console.log(photos);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {loading && <b>Loading... Please wait...</b>}
    </div>
  );
};
