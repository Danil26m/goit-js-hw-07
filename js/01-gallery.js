import { galleryItems } from './gallery-items.js';
// Change code below this line
const divv =  document.querySelector(".gallery");


function addImg(img) {
  img.map(el => divv.insertAdjacentHTML('afterbegin',`
  <div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`))
return img;
}

function img(elem) {
  elem.preventDefault();
  if (!elem.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
  <img src=${elem.target.dataset.source} width="auto" height="auto">
`)
instance.show()
console.log(elem.target.dataset.source);
}
  divv.addEventListener("click", img)
addImg(galleryItems);
console.log(addImg(galleryItems))
