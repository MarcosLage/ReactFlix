
import axios from 'axios';

//BASE DA URL  https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=fc19acbaca1fc00e6b2a0e641ce19ec9&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
    

