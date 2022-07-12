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

const typeMovie = 'movie';
const typeTv = 'tv';


// TRENDING GET
async function getTrendingMoviesDay() {
    
  const { data } = await api('trending/movie/day');
  const movies = data.results;

  cardWithDetails(movies, dayMoviesNode, trendingDayMoviesContainer, typeMovie);
}

async function getTrendingMoviesWeek() {
   
  const { data } = await api('trending/movie/week');
  const movies = data.results;

  cardWithDetails(movies, weekMoviesNode, trendingWeekMoviesContainer,typeMovie);
}

async function getTrendingTvDay() {
    
  const { data } = await api('trending/tv/day');
  const series = data.results;

  cardWithDetails(series, dayTvNode, trendingDayTvContainer, typeTv);
}

async function getTrendingTvWeek() {
   
  const { data } = await api('trending/tv/week');
  const series = data.results;

  cardWithDetails(series, weekTvNode, trendingWeekTvContainer, typeTv);
}
// END TRENDING GET

// CATEGORY GET
// END CATEGORY GET

// BY CATEGORY GET
// END BY CATEGORY GET

// BY SEARCH GET
// END BY SEARCH GET

// BY ID GET
// END BY ID GET