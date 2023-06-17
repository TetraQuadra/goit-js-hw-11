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
  CatDescriptionEl.innerHTML = `<div class="cat-descr">
    <h2>${data[0]?.breeds[0]?.name}</h2>
    <p>${data[0]?.breeds[0]?.description}</p>
    <p> Temperament: <b>${data[0]?.breeds[0]?.temperament}</b></p>
        </div>`;
  CatImageContainer.appendChild(imgElement);
};

export default assignCatInfo;
