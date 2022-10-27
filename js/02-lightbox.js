import { galleryItems } from './gallery-items.js';
// Change code below this line
const divEL =  document.querySelector(".gallery");


function addImg(img) {
  img.map(el => divEL.insertAdjacentHTML('afterbegin',`
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
      title="${el.description}"
    />
  </a>`))
return img;
}
console.log(addImg(galleryItems));
// function img(elem) {
//   elem.preventDefault();
new SimpleLightbox('.gallery a');

 // }


