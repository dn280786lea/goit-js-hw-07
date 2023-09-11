import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElements  = document.querySelector('.gallery')

let modal; 

const createGalleryMarkup = galleryItems => {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
            />
        </a>
        </div>
           `;
    })
    .join('');
};

galleryElements.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});