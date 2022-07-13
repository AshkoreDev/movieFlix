import { getTrendingMoviesDay, getTrendingMoviesWeek, getTrendingTvDay, getTrendingTvWeek, getCategories, getByCategory } from './js/get.js';
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
  location.hash.startsWith('#movie=') ? movieDetailsPage() :
  location.hash.startsWith('#tv=') ? tvDetailsPage() :
  homePage();

  window.scrollTo(0, 0);
}

function searchPage() {
  console.log('searchPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  detailsCardSection.classList.add('inactive');
}

function bySearchPage() {
  console.log('bySearchPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.remove('inactive');
  byCategorySection.classList.add('inactive');
  detailsCardSection.classList.add('inactive');
}

function categoryPage() {
  console.log('categoryPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.remove('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  detailsCardSection.classList.add('inactive');

  categoriesContainer.innerHTML = "";

  getCategories();
}

function byCategoryPage() {
  console.log('byCategoryPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.remove('inactive');
  detailsCardSection.classList.add('inactive');

  byCategoryContainer.innerHTML = "";
  byCategoryTitle.innerHTML = "";

  const [url, info] = location.hash.split('=');
  const [id, name] = info.split('--');
  
  getByCategory(id, name, 'movie');
  getByCategory(id, name, 'tv');
}

function movieDetailsPage() {
  console.log('movieDetailsPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  detailsCardSection.classList.remove('inactive');
}

function tvDetailsPage() {
  console.log('tvDetailsPage');

  trendingSection.classList.add('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  detailsCardSection.classList.remove('inactive');
}

function homePage() {
  console.log('Home');

  trendingSection.classList.remove('inactive');
  categorySection.classList.add('inactive');
  bySearchSection.classList.add('inactive');
  byCategorySection.classList.add('inactive');
  detailsCardSection.classList.add('inactive');

  trendingWeekMoviesContainer.innerHTML = "";
  trendingDayTvContainer.innerHTML = "";
  trendingWeekTvContainer.innerHTML = "";
  categoriesContainer.innerHTML = "";

  getTrendingMoviesDay();
  getTrendingMoviesWeek();
  getTrendingTvDay();
  getTrendingTvWeek();
}