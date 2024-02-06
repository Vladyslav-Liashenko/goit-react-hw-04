import axios from 'axios';

export const fetchPhoto = async (accessKey, query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}`
  );
    return response.data.results;
};
