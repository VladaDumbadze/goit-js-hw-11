import axios from 'axios';

// const BASE_URL = "https://pixabay.com/api/?";
// const KEY = "?key=25375728-e2c7b91f69f9e26292dffaef5";
export default class NewsApiServise{
    constructor () {
        this.searchQuery = "";
        this.page = 1;
        
  }
    
    async fetchArticles() {
        const axios = require('axios').default;
       
        const options = {
            method: "get",
            url: "https://pixabay.com/api/",
            params: {
                key: "25375728-e2c7b91f69f9e26292dffaef5",
                q: this.searchQuery,
                
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 40,
                page: this.page,
            },
            
        };
        
        const search = await axios(options);
        this.page += 1;
     
        const hits = search.data.hits;
        const totalHits = search.data.totalHits;

        return { hits, totalHits }; 

        
        // .then(data => {
                
        //     return data.hits;
        // }
        //   .then(r => r.json())
    }
    resetPage() {
        this.page = 1;
    }

     get query(){
         return this.searchQuery;
    }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}


