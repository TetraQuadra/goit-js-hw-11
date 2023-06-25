import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const header = document.querySelector('.header');
const section = document.querySelector('.section');
const gallery = document.querySelector('.gallery');
const pages = document.querySelector('.pages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const lightbox = new simpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
const loadMoreButton = document.querySelector('.button-more-images');

export {
  header,
  section,
  gallery,
  pages,
  form,
  input,
  lightbox,
  loadMoreButton,
};
