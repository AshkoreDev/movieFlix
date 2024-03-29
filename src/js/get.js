import './nodes.js';
import { API_KEY } from './key.js';
import { createCard, createCardWithDetails, createOneCard, createCategoryCard } from './cards.js';

let page = 1;
let maxPage;

// AXIOS CONFIG
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
export const getTrendingMoviesDay = async () => {

  const { data } = await api('trending/movie/day');
  const movies = data.results;

  const dayMoviesNode = document.createDocumentFragment();
  createCardWithDetails(movies, dayMoviesNode, trendingDayMoviesContainer, typeMovie);
};

export const getTrendingMoviesWeek = async () => {

  const { data } = await api('trending/movie/week');
  const movies = data.results;

  const weekMoviesNode = document.createDocumentFragment();
  createCardWithDetails(movies, weekMoviesNode, trendingWeekMoviesContainer, typeMovie);
};

export const getTrendingTvDay = async () => {

  const { data } = await api('trending/tv/day');
  const series = data.results;

  const dayTvNode = document.createDocumentFragment();
  createCardWithDetails(series, dayTvNode, trendingDayTvContainer, typeTv);
};

export const getTrendingTvWeek = async () => {

  const { data } = await api('trending/tv/week');
  const series = data.results;

  const weekTvNode = document.createDocumentFragment();
  createCardWithDetails(series, weekTvNode, trendingWeekTvContainer, typeTv);
};
// END TRENDING GET

// CATEGORY GET
export const getCategories = async () => {

  const { data } = await api('genre/movie/list');
  const categories = data.genres;

  const categoriesNode = document.createDocumentFragment();
  createCategoryCard(categories, categoriesNode, categoriesContainer);
};
// END CATEGORY GET

// BY CATEGORY GET
export const getByCategory = async (id, name, type) => {

  const [nameOne, nameTwo, nameThree] = name.split('%20');

  nameTwo ? byCategoryTitle.innerHTML = `${nameOne} ${nameTwo}` : byCategoryTitle.innerHTML = `${nameOne}`;
  nameThree ? byCategoryTitle.innerHTML = `${nameOne} ${nameTwo} ${nameThree}` :

    byCategoryContainer.classList.remove("inactive");

  const { data } = await api(`discover/${type}`, {
    params: {
      with_genres: id
    }
  });

  const info = data.results;
  maxPage = data.total_pages;

  const byCategoryNode = document.createDocumentFragment();
  createCard(info, byCategoryNode, byCategoryContainer, type);
};

export const getPaginatedByCategory = async (id, type) => {

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);

  const pageIsNotMax = page < maxPage;

  if (scrollIsBottom && pageIsNotMax) {

    page++;
    const { data } = await api(`discover/${type}`, {
      params: {
        with_genres: id,
        page
      }
    });

    const info = data.results;

    const paginatedByCategoryNode = document.createDocumentFragment();
    createCard(info, paginatedByCategoryNode, byCategoryContainer, type);
  }
};
// END BY CATEGORY GET

// BY SEARCH GET
export const getBySearch = async (query, type) => {

  bySearchTitle.textContent = query;

  const { data } = await api(`search/${type}`, {
    params: {
      query: query
    }
  });

  const info = data.results;
  maxPage = data.total_pages;

  const bySearchNode = document.createDocumentFragment();
  createCard(info, bySearchNode, bySearchContainer, type);
};

export const getPaginatedBySearch = async (query, type) => {

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);

  const pageIsNotMax = page < maxPage;

  if (scrollIsBottom && pageIsNotMax) {

    page++;
    const { data } = await api(`search/${type}`, {
      params: {
        query: query,
        page
      }
    });

    const info = data.results;

    const paginatedBySearchNode = document.createDocumentFragment();
    createCard(info, paginatedBySearchNode, bySearchContainer, type);
  }
};
// END BY SEARCH GET

// BY ID GET
export const getById = async (id, type) => {

  const { data } = await api(`${type}/${id}`);

  const byIdNode = document.createDocumentFragment();
  createOneCard(data, byIdNode, byIdSection, type);
};
// END BY ID GET

// GET RECOMENDATIONS BY ID
export const getRecomendationsById = async (type, id) => {

  const { data } = await api(`${type}/${id}/similar`);
  const info = data.results;

  const byRelatedNode = document.createDocumentFragment();
  createCard(info, byRelatedNode, recomendationsByIdContainer, type);
};
// END GET RECOMENDATIONS BY ID