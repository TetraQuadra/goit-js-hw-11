export default function createCards(images) {
  const gallery = images
    .map(
      image =>
        `<a href="${image.largeImageURL}" class="image-card">
     <div class ="image-container"> <img class="image" src="${image.largeImageURL}" alt="image from ${image.user}"></div>
      <div class="description">
        <div class="likes stat"><h4>Likes</h4><p>${image.likes}</p></div>
        <div class="views stat"><h4>Views</h4><p>${image.views}</p></div>
        <div class="comments stat"><h4>Comments</h4><p>${image.comments}</p></div>
        <div class="downloads stat"><h4>Downloads</h4><p>${image.downloads}</p></div>
      </div>
    </a>`
    )
    .join('');

  return gallery;
}
