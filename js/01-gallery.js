import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const imgsCardsMarkup = createImageCardsMurkup(galleryItems);

imgContainer.insertAdjacentHTML('beforebegin', imgsCardsMarkup);
imgContainer.addEventListener('click', onImgContainerClick);

function createImageCardsMurkup (imgs) {
    return imgs.map(({preview, original, description}) => {
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
    .join('')
;
};

