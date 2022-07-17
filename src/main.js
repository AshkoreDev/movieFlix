import { getTrendingMoviesDay, getTrendingMoviesWeek, getTrendingTvDay, getTrendingTvWeek, getCategories, getByCategory, getBySearch, getById } from './js/get.js';
import './js/nodes.js';

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

// MOBILE MENU BUTTONS
home.addEventListener('click', () => location.hash = '#home');
search.addEventListener('click', () => location.hash = '#search=');
categories.addEventListener('click', () => location.hash = '#category=');

searchBtn.addEventListener('click', () => location.hash = `#bysearch=${searchInput.value}`);
backArrow.addEventListener('click', () => location.hash = window.history.back());

function navigator() {

  location.hash.startsWith('#search=') ? searchPage() :
  location.hash.startsWith('#bysearch=') ? bySearchPage() :
  location.hash.startsWith('#category=') ? categoryPage() :
  location.hash.startsWith('#bycategory=') ? byCategoryPage() :
  location.hash.startsWith('#movie=') ? movieByIdPage() :
  location.hash.startsWith('#tv=') ? tvByIdPage() :
  homePage();

  window.scrollTo(0, 0);
}

function searchPage() {
  console.log('searchPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  byIdSection.classList.add('inactive');
  recomendationsByIdSection.classList.add('inactive');
}

function bySearchPage() {
  console.log('bySearchPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.remove('inactive');
  byCategorySection.classList.add('inactive');
  byIdSection.classList.add('inactive');
  recomendationsByIdSection.classList.add('inactive');

  bySearchContainer.innerHTML = "";
  bySearchTitle.innerHTML = "";

  const [url, query] = location.hash.split('=');
  getBySearch(query, 'movie');
  getBySearch(query, 'tv');
}

function categoryPage() {
  console.log('categoryPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.remove('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  byIdSection.classList.add('inactive');

  categoriesContainer.innerHTML = "";

  getCategories();
}

function byCategoryPage() {
  console.log('byCategoryPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.remove('inactive');
  byIdSection.classList.add('inactive');
  recomendationsByIdSection.classList.add('inactive');

  byCategoryContainer.innerHTML = "";
  byCategoryTitle.innerHTML = "";

  const [url, info] = location.hash.split('=');
  const [id, name] = info.split('--');
  
  getByCategory(id, name, 'movie');
  getByCategory(id, name, 'tv');
}

function movieByIdPage() {
  console.log('movieByIdPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  byIdSection.classList.remove('inactive');
  recomendationsByIdSection.classList.remove('inactive');

  byIdSection.innerHTML = "";
  RecomendationsByIdContainer.innerHTML = "";

  const [url, id] = location.hash.split('=');
  getById(id, 'movie');
}

function tvByIdPage() {
  console.log('tvByIdPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  byIdSection.classList.remove('inactive');
  recomendationsByIdSection.classList.remove('inactive');

  byIdSection.innerHTML = "";
  RecomendationsByIdContainer.innerHTML = "";

  const [url, id] = location.hash.split('=');
  getById(id, 'tv');
}

function homePage() {
  console.log('Home');

  trendingSection.classList.remove('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  byIdSection.classList.add('inactive');
  recomendationsByIdSection.classList.add('inactive');

  trendingWeekMoviesContainer.innerHTML = "";
  trendingDayTvContainer.innerHTML = "";
  trendingWeekTvContainer.innerHTML = "";
  categoriesContainer.innerHTML = "";

  getTrendingMoviesDay();
  getTrendingMoviesWeek();
  getTrendingTvDay();
  getTrendingTvWeek();
}