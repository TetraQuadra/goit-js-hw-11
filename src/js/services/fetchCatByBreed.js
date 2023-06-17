import apiConfig from '../../config';
import { fetchData } from './fetchData';

const fetchCatByBreed = async e => {
  console.log(e);
  const response = await fetchData({
    path: apiConfig.path.search,
    params: `?breed_ids=${e.target.value}`,
    apiKey: apiConfig.apiKey,
  });
  console.log(response);
  return response;
};

export default fetchCatByBreed;
