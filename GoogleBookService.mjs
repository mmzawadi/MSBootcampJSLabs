import axios from 'axios';
export class GoogleBookService {
    constructor() {
        this.url = 'https://www.googleapis.com/books/v1/volumes?q=';
        this.fetchedResults = [];
        this.__axios = axios
    }

    fetchBooks = async (term) => {
        const results = await this.__axios(this.url + term);
        const body =  results.data;
        this.fetchedResults = body;
        return body;
    }
    
}
    