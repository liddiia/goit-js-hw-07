import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const createGalleryList = galleryItems => {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
            </a>`;
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', createGalleryList(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    captionDelay: 250,
    captionsData: 'alt',
    fadeSpeed: 250,
    rtl: true,
});

