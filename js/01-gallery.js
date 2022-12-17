import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgContainer = document.querySelector('.gallery');
const imgsCardsMarkup = createImageCardsMurkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgsCardsMarkup);
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

function onImgContainerClick(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    const isImgCardEl = evt.target.classList.contains('gallery__image');

    if(!isImgCardEl) {
        return;
    }

    const imgEl = evt.target;
    const originalImgSizeRef = imgEl.dataset.source;
    console.log(originalImgSizeRef);

    const instance = basicLightbox.create(`
    <img
      src="${originalImgSizeRef}"
    />
    `)
    instance.show();
};