import Notiflix from 'notiflix';
import apiConfig from '../../config';

function fetchData({ path, method = 'GET', params = '', apiKey = '' }) {
  return fetch(`${apiConfig.apiMainPath}${path}${params}${apiKey}`, {
    method: method,
  })
    .then(response => {
      if (!response.ok) {
        return response
          .clone()
          .json()
          .then(data => {
            Notiflix.Notify.failure("Something gone wrong, check internet connection and refresh page");
            throw new Error(data.message);
          });
      }
      return response.json().then(data => {
        if (typeof data === 'object') {
          data.status = response.status;
        }
        return data;
      });
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Something gone wrong, check internet connection and refresh page'
      );
      throw error;
    });
}

export { fetchData };
