import apiConfig from '../../config';
import { fetchData } from './fetchData';

const fetchBreeds = async () => {
  const response = await fetchData({
    path: apiConfig.path.breeds,
    method: 'GET',
    params: '',
  });
  if (response.status === 200) {
    return response;
  }
};

const fetchCatByBreed = async e => {
  console.log(e);
  const response = await fetchData({
    path: apiConfig.path.search,
    params: `?breed_ids=${e.target.value}`,
    apiKey: apiConfig.apiKey,
  });   
  return response;
};

export { fetchCatByBreed, fetchBreeds };
