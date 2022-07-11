import './nodes.js';

// AXIOS
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': API_KEY
  }
});


// NODES
const dayMoviesNode = [];
const weekMoviesNode = [];
const dayTvNode = [];
const weekTvNode = [];
const categoriesNode = [];
const byCategoryNode = [];
const bySearchNode = [];


// TRENDING GET
// END TRENDING GET

// CATEGORY GET
// END CATEGORY GET

// BY CATEGORY GET
// END BY CATEGORY GET

// BY SEARCH GET
// END BY SEARCH GET

// BY ID GET
// END BY ID GET