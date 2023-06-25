import executeWithLoader from './js/services/executeWithLoader';
import Notiflix from 'notiflix';
import {
  form,
  gallery,
  input,
  lightbox,
  loadMoreButton,
} from './js/querrySelectors';
import { fetchImage } from './js/services/api';
import createCards from './js/services/createCards';

var page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!input.value) {
    Notiflix.Notify.warning(
      'You didnt typed anything in search field, here is some random pictures'
    );
  }
  await executeWithLoader(async () => {
    const images = await fetchImage(input.value, '1');
    console.log(images);
    if (images.total == 0) {
      Notiflix.Notify.failure('Nothing found');
    }
    const galleryHtml = createCards(images.hits);
    gallery.innerHTML = galleryHtml;
    loadMoreButton.classList.remove('hidden');
    lightbox.refresh();
  });
});

loadMoreButton.addEventListener('click', async () => {
  page++;
  const images = await fetchImage(input.value, page);
  console.log(images);
  if (images.total == 0) {
    Notiflix.Notify.failure('Nothing found');
    loadMoreButton.classList.add('hidden');
  }
  const galleryHtml = createCards(images.hits);
  const currentGallery = document.querySelector('.gallery');
  gallery.innerHTML = `${currentGallery.innerHTML} ${galleryHtml}`;
  lightbox.refresh();
});
