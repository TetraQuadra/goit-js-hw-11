import apiConfig from '../../config';
import { fetchData } from './fetchData';

const fetchBreeds = async () => {
  const response = await fetchData({
    path: apiConfig.path.breeds,
    method: 'GET',
    params: '',
  });
  console.log(response);
  if (response.status === 200) {
    return response;
  }
};
export default fetchBreeds;
