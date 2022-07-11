const API_IMG = 'https://image.tmdb.org/t/p/w'; //154
const STAR_IMG = 'https://img.icons8.com/fluency/344/star.png';

function createCard(data, node, container) {

	data.forEach(item => {

		const cardContainer = document.createElement('article');
		const cardImg = document.createElement('img');
		const cardTitle = document.createElement('h4');

		cardContainer.className 'cardContainer';
		cardImg.className 'cardContainer--img';
		cardTitle.className 'cardContainer--title';

		cardContainer.append(cardTitle);
		cardContainer.append(cardImg);

    node.push(cardContainer);
	});

	container.append(...node);
}

function createCardWithDetails(data, node, container) {
	
	data.forEach(item => {

		const cardContainer = document.createElement('article');
		const cardImg = document.createElement('img');
		const cardTitle = document.createElement('h4');
		const cardDetails = document.createElement('div');
		const cardRankingContainer = document.createElement('div');
		const cardRankingIcon = document.createElement('img');
		const cardRanking = document.createElement('p');
		const cardDate = document.createElement('p');

		cardRankingIcon.setAttribute('src', STAR_IMG);
		movieRankingStar.setAttribute('alt', 'Valoracíón');

		cardContainer.className 'cardContainer';
		cardImg.className 'cardContainer--img';
		cardTitle.className 'cardContainer--title';
		cardDetails.className 'cardContainer__details';
		cardRankingContainer.className 'cardContainer__details--ranking';
		cardDate.className 'cardContainer__details--date';

		cardRankingContainer.append(cardRanking);
		cardRankingContainer.append(cardRankingIcon);
		cardDetails.append(cardRankingContainer);
		cardDetails.append(cardDate);
		cardContainer.append(cardDetails);
		cardContainer.append(cardTitle);
		cardContainer.append(cardImg);

    node.push(cardContainer);
	});

	container.append(...node);
}

function createOneCard() {
	
}

function createCategoryCard(data, node, container) {
	
	data.forEach(item => {

		const categoryCard = document.createElement('article');
		const categoryTitle = document.createElement('h5');

		categoryCard.className 'sectionCategory__card';
		categoryTitle.className 'sectionCategory__card--title';

    categoryCard.append(categoryTitle);
    node.push(categoryCard);
	});

	container.append(...node);
}
