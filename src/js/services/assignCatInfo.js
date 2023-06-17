import Notiflix from 'notiflix';
import { CatDescriptionEl, CatImageContainer } from '../querrySelectors';

const assignCatInfo = data => {
  if (!data) {
    return;
  }
  console.log(data);
  CatImageContainer.innerHTML = '';
  CatDescriptionEl.innerHTML = '';
  const imgElement = document.createElement('img');
  imgElement.src = data[0]?.url;
  CatDescriptionEl.innerHTML = `<p>${data[0]?.breeds[0]?.description}</p>`;
  CatImageContainer.appendChild(imgElement);
};

export default assignCatInfo;
