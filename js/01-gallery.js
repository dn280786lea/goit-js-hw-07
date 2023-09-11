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

galleryElements.addEventListener('click', event => {
    event.preventDefault(); 
     if (event.target.nodeName !== "IMG") {
        return;
    }
    const originalImage = event.target.dataset.source;
    modal = basicLightbox.create(`
        <div>
            <img src="${originalImage}" width="800" height="600" />
        </div>
    `);
    modal.show();
    
           modal.element().addEventListener('click', event => {
                if (event.target.nodeName === 'IMG') {
                    modal.close();
                }
            });
 
            document.addEventListener('keydown', escapeListener);
        
    
});


