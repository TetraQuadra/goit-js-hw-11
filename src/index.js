import { fetchData } from './js/services/fetchData';
import apiConfig from './config';
import executeWithLoader from './js/services/executeWithLoader';
import SlimSelect from 'slim-select';
import fetchBreeds from './js/services/fetchBreeds';
import {
  ButtonEl,
  ButtonFetchBreedsEl,
  SelectBreeds,
} from './js/querrySelectors';
import { async } from '@vimeo/player';
import fillSelectWithBreeds from './js/services/fillSelectWithBreeds';
import fetchCatByBreed from './js/services/fetchCatByBreed';
import assignCatInfo from './js/services/assignCatInfo';
import Notiflix from 'notiflix';

executeWithLoader(async () => await fillSelectWithBreeds());

SelectBreeds.addEventListener('change', async event => {
  await executeWithLoader(async () => {
    const cat = await fetchCatByBreed(event);
    assignCatInfo(cat);
  });
});
