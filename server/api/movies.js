// import { useBody, useCookies, useQuery } from 'h3';
import * as url from 'url';

// export default async (req, res) => {
//     let body;
//     const query = useQuery(req);
//     const cookies = useCookies(req);
//     if (req.method === 'POST') {
//         body = await useBody(req); // only for POST request
//     }
    
//     return { query, body, cookies }
// }


export default async (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const tmdbApiKey = process.env.TMDB_API_KEY; // TODO: use $config https://v3.nuxtjs.org/docs/usage/runtime-config
    let data = {};

    if (queryObject.query) {
        data = await $fetch('https://api.themoviedb.org/3/search/movie?api_key=' + tmdbApiKey + '&language=ru-RU&page=1&include_adult=false&query=' + queryObject.query);
    }

    return data; // default return formating JSON

    // res.writeHead(200, { 'Content-Type': 'Application/json' });
    // res.write(JSON.stringify(data));
    // res.end();
}

// https://image.tmdb.org/t/p/w500/