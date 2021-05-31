import items from "../gallery-items.js"

const galleryList = document.querySelector('.js-gallery');
const markup = createGalleryListMarkup(items);

galleryList.insertAdjacentHTML('beforeend', markup);


function createGalleryListMarkup(items) {

  return items.map(({preview, original, description}) => {
    return`
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `; 
  }).join(''); 
  };

  const images = document.querySelectorAll('.gallery__image');
  const modal = document.querySelector('.lightbox');
  const modalImg = document.querySelector('.lightbox__image');
  const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');


galleryList.addEventListener('click', handleGalleryClick);

function handleGalleryClick(evt){
    evt.preventDefault() 
    if(evt.target.nodeName !== "IMG") return;
  
    openModal(evt.target); 
};

  function openModal(target){
    modal.classList.add("is-open")
    pastModalAtribut(target)

}

function pastModalAtribut(target) {
  modalImg.src=target.dataset.source;
  modalImg.alt=target.alt

  modalCloseBtn.addEventListener('click',modalClose);
}

function modalClose(){
  modal.classList.remove("is-open")
  images.src="";
  images.alt="";

  modalCloseBtn.removeEventListener('click',modalClose)
}





// const arrayImages = [];

  // images.forEach(el => {
  //   arrayImages.push(el.getAttribute('data-source'));
  //   el.addEventListener('click', function () {
  //     modal.style.display = 'block';
  //     // modal.classList.add("is-open")
  //     modalImg.src = this.getAttribute('data-source');
  //   })
  // });




  // const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');
  // modalCloseBtn.addEventListener('click', () => {
  //   modal.style.display = 'none';
  //   // modal.classList.remove("is-open")
  // });