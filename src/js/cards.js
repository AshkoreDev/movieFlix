const API_IMG = 'https://image.tmdb.org/t/p/w'; //154
const STAR_IMG = 'https://img.icons8.com/fluency/344/star.png';

function createCard(data, node, container) {

	data.forEach(item => {

		const cardContainer = document.createElement('article');
		const cardImg = document.createElement('img');
		const cardTitle = document.createElement('h4');

		cardImg.setAttribute('src', `${API_IMG}154${item.poster_path}`);

		if(item.title || item.release_date) {

      cardImg.setAttribute('alt', `${item.title} Poster`);
      cardTitle.textContent = item.title;
      cardDate.textContent = item.release_date;

    } else if(item.name || item.first_air_date) {

      cardImg.setAttribute('alt', `${item.name} Poster`);
      cardTitle.textContent = item.name;
      cardDate.textContent = item.first_air_date;
    }

		cardContainer.className = 'cardContainer';
		cardImg.className = 'cardContainer--img';
		cardTitle.className = 'cardContainer--title';
		
		cardContainer.append(cardImg);
		cardContainer.append(cardTitle);
		
		node.append(cardContainer);
	});

	container.append(...node);
}

function createCardWithDetails(data, node, container, type) {
	
	data.forEach(item => {

		const cardContainer = document.createElement('article');
		const cardImg = document.createElement('img');
		const cardTitle = document.createElement('h4');
		const cardDetails = document.createElement('div');
		const cardRankingContainer = document.createElement('div');
		const cardRankingIcon = document.createElement('img');
		const cardRanking = document.createElement('p');
		const cardDate = document.createElement('p');

		cardImg.setAttribute('src', `${API_IMG}154${item.poster_path}`); 
		cardRankingIcon.setAttribute('src', STAR_IMG);
		cardRankingIcon.setAttribute('alt', 'Valoración');
		cardRanking.textContent = item.vote_average;

		if(item.title || item.release_date) {

      cardImg.setAttribute('alt', `${item.title} Poster`);
      cardTitle.textContent = item.title;
      cardDate.textContent = item.release_date;

    	} else if(item.name || item.first_air_date) {

      cardImg.setAttribute('alt', `${item.name} Poster`);
      cardTitle.textContent = item.name;
      cardDate.textContent = item.first_air_date;
    }

		cardContainer.className = 'cardContainer';
		cardImg.className = 'cardContainer--img';
		cardTitle.className = 'cardContainer--title';
		cardDetails.className = 'cardContainer__details';
		cardRankingContainer.className = 'cardContainer__details--ranking';
		cardDate.className = 'cardContainer__details--date';

		cardRankingContainer.append(cardRankingIcon);
		cardRankingContainer.append(cardRanking);
		
		cardDetails.append(cardRankingContainer);
		cardDetails.append(cardDate);

		cardContainer.append(cardImg);
		cardContainer.append(cardTitle);
		cardContainer.append(cardDetails);
		
    node.append(cardContainer);
	});

	container.appendChild(node);
}

function createOneCard() {
	
	const cardContainer = document.createElement('article');
	const cardImgContainer = document.createElement('figure');
	const cardImg = document.createElement('img');
	const cardInfoContainer = document.createElement('section');
	const cardInfoTitle = document.createElement('h3');
	const cardInfoTime = document.createElement('p');
	const cardInfoDetailsContainer = document.createElement('div');
	const cardInfoDetailsRankingContainer = document.createElement('div');
	const cardInfoDetailsRankingIcon = document.createElement('img');
	const cardInfoDetailsRankingValue = document.createElement('p');
	const cardInfoDetailsDate = document.createElement('p');
	const cardInfoCategoriesContainer = document.createElement('div');
	const cardDescriptionContainer = document.createElement('section');
	const cardDescription = document.createElement('p');

	cardContainer.className = 'oneCardContainer';
	cardImgContainer.className = 'oneCardContainer__img';
	cardInfoContainer.className = 'oneCardContainer__info';
	cardInfoTitle.className = 'oneCardContainer__info--title';
	cardInfoTime.className = 'oneCardContainer__info--time';
	cardInfoDetailsContainer.className = 'cardContainer__details';
	cardInfoDetailsRankingContainer.className = 'cardContainer__details--ranking';
	cardInfoDetailsDate.className = 'cardContainer__details--date';
	cardInfoCategoriesContainer.className = 'oneCardContainer__info__categories';
	cardDescriptionContainer.className = 'oneContainer__description';
	
	cardInfoDetailsRankingIcon.setAttribute('src', STAR_IMG);
	cardInfoDetailsRankingIcon.setAttribute('alt', 'Valoración');
	// ojo
	if(data.title) {

    cardImg.setAttribute('alt', `${data.title} Poster`);
    cardInfoTitle.textContent = data.title;
    cardInfoDetailsDate.textContent = data.release_date;

  } else {

    cardImg.setAttribute('alt', `${data.name} Poster`);
    cardInfoTitle.textContent = data.name;
    cardInfoDetailsDate.textContent = data.first_air_date;
  }

	cardInfoDetailsRankingContainer.append(cardInfoDetailsRankingIcon);
	cardInfoDetailsRankingContainer.append(cardInfoDetailsRankingValue);
	cardInfoDetailsContainer.append(cardInfoDetailsRankingContainer);
	cardInfoDetailsContainer.append(cardInfoDetailsDate);
	cardDescriptionContainer.append(cardDescription);

	cardImgContainer.append(cardImg);
	cardInfoContainer.append(cardInfoTitle);
	cardInfoContainer.append(cardInfoTime);
	cardInfoContainer.append(cardInfoDetailsContainer);
	cardInfoContainer.append(cardInfoCategoriesContainer);

	cardContainer.append(cardImgContainer);
	cardContainer.append(cardInfoContainer);
	cardContainer.append(cardDescriptionContainer);
}

function createCategoryCard(data, node, container) {
	
	data.forEach(item => {

		const categoryCard = document.createElement('article');
		const categoryTitle = document.createElement('h5');

    categoryTitle.textContent = item.name;
    categoryTitle.setAttribute('id', `id${item.id}`);

		categoryCard.className = 'sectionCategory__card';
		categoryTitle.className = 'sectionCategory__card--title';

    categoryCard.append(categoryTitle);
    node.append(categoryCard);
	});

	container.append(...node);
}

export { createCard, createCardWithDetails, createOneCard, createCategoryCard };