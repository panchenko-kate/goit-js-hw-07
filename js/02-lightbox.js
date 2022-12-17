import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgContainer = document.querySelector('.gallery');
const imgsCardsMarkup = createImageCardsMurkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgsCardsMarkup);
// imgContainer.addEventListener('click', onImgContainerClick);

function createImageCardsMurkup (imgs) {
    return imgs.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('')
;
};

var gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});