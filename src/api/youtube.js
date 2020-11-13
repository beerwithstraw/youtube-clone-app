import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // params: {
    //     part: 'snippet',
    //     maxResults: 5,
    //     key: 'AAIzaSyB1ZAZ1XP6w0hO85HkdKtA1vqo7hIZes_A',
    //     // q: searchTerm,         
    //   }

});