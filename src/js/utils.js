// INTERSECTION OBSERVER
export const lazyLoader = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

  	if (entry.isIntersecting) {

  		const imgUrl = entry.target.getAttribute('data-img');
  		entry.target.setAttribute('src', imgUrl);
  	}
  });
});