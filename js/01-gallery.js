import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const createGalleryList = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"/>
        </a>
        </div>`;
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', createGalleryList(galleryItems));

let modal;

galleryEl.addEventListener('click', event => {
    event.preventDefault();
 
    if (event.target.nodeName !== "IMG") {
        return;
    }
       const originalImageUrl = event.target.dataset.source;

        modal = basicLightbox.create(`
        <div>
            <img src="${originalImageUrl}" width="832" height="554" />
             </div>`);

    modal.show();

modal.element().addEventListener('click', event => {
 
    modal.close();

});

});

