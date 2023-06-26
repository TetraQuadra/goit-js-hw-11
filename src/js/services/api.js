import axios from 'axios';
import Notiflix from 'notiflix';
import apiConfig from '../../config';
import requestToParam from './requestToParam';

const fetchImage = async (request, page) => {
  const modifiedReq = requestToParam(request);
  const response = await axios
    .get(apiConfig.apiMainPath, {
      params: {
        ...apiConfig.defaultParams,
        orientation: 'horizontal',
        safesearch: true,
        image_type: 'photo',
        q: modifiedReq,
        page: page,
        key: apiConfig.apiKey,
        perPage: 40,
      },
    })
    .catch(function (error) {
      Notiflix.Notify.failure('Something gone wrong, please refresh page');
      return;
    });
  return response.data;
};

export { fetchImage };
