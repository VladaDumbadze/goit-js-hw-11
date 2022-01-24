import './sass/main.scss';
import Notiflix from 'notiflix';
import axios from "axios";
import CARD from './partials/card.hbs';
import NewsApiServise from './api_service';
import simpleLightbox from './simpleLightbox'




const refs = {
    searchForm: document.querySelector(".search-form"),
    loadMoreBtn: document.querySelector(".load-more"),
    hitsCard: document.querySelector(".gallery")
};

const newsApiServise = new NewsApiServise()
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore)


function onSearch(e) {
    e.preventDefault();

    clearHitsMarkup();
      newsApiServise.query = e.currentTarget.elements.query.value;
      newsApiServise.resetPage();
    newsApiServise.fetchArticles().then(hitsMarkup);
};

function onLoadMore() {
   newsApiServise.fetchArticles().then(hitsMarkup);
};

function hitsMarkup(hits) {
    const markup = hits.map(element => {return CARD(element);}).join('');
    refs.hitsCard.insertAdjacentHTML("beforeend", markup) ;
    console.log(markup);
};
// onPicClickLight();
function clearHitsMarkup() {
    refs.hitsCard.innerHTML = "";
};















// function renderCounries(name) {
//     if (name.length > 10) {
//         Notify.info("Too many matches found. Please enter a more specific name.");
//         return 
//     }
//     if (name.length > 2 && name.length < 10) {
//         const list = CTR(name);
//         refs.coutries.innerHTML = list;
//        console.log(list);
//     }
//     if (name.length === 1) {
//         console.log(name);
//         const markup = CTRinf(name[0]);
//         refs.info.innerHTML = markup;
//         return
//     }
    
//    const markup = name.map(element => {return CTR(element);}).join('');
    
//     refs.info.innerHTML = markup;
    
//     console.log(name);
//     console.log(markup);
    
    
// };


// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }