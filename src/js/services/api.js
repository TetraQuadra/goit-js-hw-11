import apiConfig from '../../config';
import { fetchData } from './fetchData';
import requestToParam from './requestToParam';

const fetchImage = (request, page) => {
  const modifiedReq = requestToParam(request);
  return fetchData({
    path: '',
    method: 'GET',
    params: `?${apiConfig.apiKey}&orientation=horizontal&safesearch=true&image_type=photo&q=${modifiedReq}&page=${page}`,
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

export { fetchImage };
