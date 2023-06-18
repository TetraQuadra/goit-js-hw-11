import apiConfig from '../../config';
import { fetchData } from './fetchData';

const fetchBreeds = () => {
  return fetchData({
    path: apiConfig.path.breeds,
    method: 'GET',
    params: '',
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Something gone wrong, check internet connection and refresh page'
      );
      console.log('first');
    });
};

const fetchCatByBreed = e => {
  return fetchData({
    path: apiConfig.path.search,
    params: `?breed_ids=${e.target.value}`,
    apiKey: apiConfig.apiKey,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Something gone wrong, check internet connection and refresh page'
      );
    });
};

export { fetchCatByBreed, fetchBreeds };
