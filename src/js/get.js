import './nodes.js';
import { API_KEY } from './key.js';
import { createCard, createCardWithDetails, createOneCard, createCategoryCard } from './cards.js';


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

const typeMovie = 'movie';
const typeTv = 'tv';


// TRENDING GET
async function getTrendingMoviesDay() {

  const { data } = await api('trending/movie/day');
  const movies = data.results;

  console.log('movies');
  console.log(movies);

  const dayMoviesNode = document.createDocumentFragment();

  createCardWithDetails(movies, dayMoviesNode, trendingDayMoviesContainer, typeMovie);
}

async function getTrendingMoviesWeek() {

  const { data } = await api('trending/movie/week');
  const movies = data.results;

  const weekMoviesNode = document.createDocumentFragment();

  createCardWithDetails(movies, weekMoviesNode, trendingWeekMoviesContainer,typeMovie);
}

async function getTrendingTvDay() {

  const { data } = await api('trending/tv/day');
  const series = data.results;

  const dayTvNode = document.createDocumentFragment();

  createCardWithDetails(series, dayTvNode, trendingDayTvContainer, typeTv);
}

async function getTrendingTvWeek() {

  const { data } = await api('trending/tv/week');
  const series = data.results;

  console.log('series');
  console.log(series);

  const weekTvNode = document.createDocumentFragment();

  createCardWithDetails(series, weekTvNode, trendingWeekTvContainer, typeTv);
}
// END TRENDING GET

// CATEGORY GET
async function getCategories() {

  const { data } = await api('genre/movie/list');
  const categories = data.genres;

  console.log('categories');
  console.log(categories);

  const categoriesNode = document.createDocumentFragment();

  createCategoryCard(categories, categoriesNode, categoriesContainer);
}
// END CATEGORY GET

// BY CATEGORY GET
async function getByCategory(id, name, type) {

  const [nameOne, nameTwo, nameThree] = name.split('%20');    

  nameTwo ? byCategoryTitle.innerHTML = `${nameOne} ${nameTwo}` :  byCategoryTitle.innerHTML = `${nameOne}`;  
  nameThree ? byCategoryTitle.innerHTML = `${nameOne} ${nameTwo} ${nameThree}` :

  byCategoryContainer.classList.remove("inactive");

  const { data } = await api(`discover/${type}`, {
    params: {
      with_genres: id
    }
  });

  const info = data.results;

  console.log('by categories');
  console.log({info});

  const byCategoryNode = document.createDocumentFragment();

  createCard(info, byCategoryNode, byCategoryContainer, type);
}
// END BY CATEGORY GET

// BY SEARCH GET
async function getBySearch(query, type) {

  bySearchTitle.textContent = query;

  const { data } = await api(`search/${type}`, {
    params: {
      query: query
    }
  });

  const info = data.results;

  console.log('by search');
  console.log({info});

  const bySearchNode = document.createDocumentFragment();

  createCard(info, bySearchNode, bySearchContainer, type);
}
// END BY SEARCH GET

// BY ID GET
async function getById(id, type) {

  const { data } = await api(`${type}/${id}`);

  console.log('by id');
  console.log({data});

  const byIdNode = document.createDocumentFragment();

  createOneCard(data, byIdNode, detailsCardSection);
}
// END BY ID GET

export { getTrendingMoviesDay, getTrendingMoviesWeek, getTrendingTvDay, getTrendingTvWeek, getCategories, getByCategory, getBySearch, getById };