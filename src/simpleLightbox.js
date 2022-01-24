// import SimpleLightbox from 'simplelightbox';
// // Дополнительный импорт стилей
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import NewsApiServise from './api_service';

// const markupLight =
//     NewsApiServise
//         .map(({ largeImageURL, webformatURL, tags }) => `
//         <a class="gallery__item" href="${largeImageURL}">
//     <img class="pic" src="${webformatURL}" alt="${tags}" width="370" height="250" loading="lazy" />
//     </a>`)
//         .join('');

// function onPicClickLight(event) {
//     window.addEventListener('keydown', keyEsc);
//     event.preventDefault();
//     const isPic = event.target.classList.contains("pic");
//     if (!isPic) return;
//     let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: `250`}) ;
    
//     function keyEsc(event) {
//         if (event.code === 'Escape') {
//             lightbox.close();
//         }
//     }
// };
// const galleryLightBox = document.querySelector(".gallery");
// galleryLightBox.insertAdjacentHTML('beforeend', markupLight);
 
// galleryLightBox.addEventListener(`click`, onPicClickLight);

