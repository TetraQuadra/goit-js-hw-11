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
var totalCounter = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  if (!input.value.trim()) {
    Notiflix.Notify.failure('You need to type something in search field');
    return;
  }
  await executeWithLoader(async () => {
    page = 1
    totalCounter = 40;
    const images = await fetchImage(input.value.trim(), '1');

    if (images.totalHits > totalCounter) {
      loadMoreButton.classList.remove('hidden');
    }

    if (images.totalHits < totalCounter) {
      loadMoreButton.classList.add('hidden');
    }

    if (images.total == 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again'
      );
      return;
    }

    Notiflix.Notify.success(`Hooray! We found ${images.totalHits} images.`);
    const galleryHtml = createCards(images.hits);
    gallery.innerHTML = galleryHtml;

    lightbox.refresh();
  });
});

loadMoreButton.addEventListener('click', async () => {
  totalCounter += 40;
  page++;

  const images = await fetchImage(input.value.trim(), page);
  if (images.total == 0) {
    Notiflix.Notify.failure('Nothing found');
    loadMoreButton.classList.add('hidden');
  }
  if (images.totalHits < totalCounter) {
    loadMoreButton.classList.add('hidden');
     Notiflix.Notify.success(`All founded images are loaded!`);
  }
  const galleryHtml = createCards(images.hits);
  const currentGallery = document.querySelector('.gallery');
  gallery.innerHTML = `${currentGallery.innerHTML} ${galleryHtml}`;
  lightbox.refresh();
});
