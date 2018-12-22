import axios from 'axios';

const KEY = 'AIzaSyCfzBxMgfnCieklskEIB3freedaG45y8-w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

