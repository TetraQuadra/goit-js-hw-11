import { fetchData } from './js/services/fetchData';
import apiConfig from './config';
import executeWithLoader from './js/services/executeWithLoader';
import SlimSelect from 'slim-select';
import {
  ButtonEl,
  ButtonFetchBreedsEl,
  SelectBreeds,
} from './js/querrySelectors';
import { async } from '@vimeo/player';
import fillSelectWithBreeds from './js/services/fillSelectWithBreeds';
import assignCatInfo from './js/services/assignCatInfo';
import Notiflix from 'notiflix';
import { fetchCatByBreed } from './js/services/catApi';

executeWithLoader(async () => await fillSelectWithBreeds());

SelectBreeds.addEventListener('change', async event => {
  await executeWithLoader(async () => {
    const cat = await fetchCatByBreed(event);
    assignCatInfo(cat);
  });
});
