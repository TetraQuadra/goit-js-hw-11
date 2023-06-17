import SlimSelect from 'slim-select';
import { SelectBreeds } from '../querrySelectors';
import fetchBreeds from './fetchBreeds';

const fillSelectWithBreeds = async () => {
  const data = await fetchBreeds();
  SelectBreeds.innerHTML = '<option value=""></option>';
  data.forEach(breed => {
    const optionElement = document.createElement('option');
    optionElement.value = breed.id;
    optionElement.textContent = breed.name;
    SelectBreeds.appendChild(optionElement);
  });
  new SlimSelect({ select: '#breed-select' });
};

export default fillSelectWithBreeds;
