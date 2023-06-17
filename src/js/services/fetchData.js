import Notiflix from 'notiflix';
import apiConfig from '../../config';

async function fetchData({ path, method = 'GET', params = '', apiKey = '' }) {
  try {
    const response = await fetch(
      `${apiConfig.apiMainPath}${path}${params}${apiKey}`,
      {
        method: method,
      }
    );
    if (!response.ok) {
      const clonedResponse = response.clone();
      const data = await clonedResponse.json();
      return Notiflix.Notify.failure(data.message);
    }
    const data = await response.json();
    if (typeof data === 'object') {
      data.status = response.status;
    }
    return data;
  } catch (error) {
    return Notiflix.Notify.failure(error.message);
  }
}

export { fetchData };
