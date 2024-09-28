(function () {
	const ratings = document.querySelectorAll('.rating');

	if (ratings.length > 0) {
		initRatings();
	}

	function initRatings() {
		let ratingActive, ratingValue;

		for (let i = 0; i < ratings.length; i++) {
			const rating = ratings[i];

			initRating(rating);
		}

		function initRating(rating) {
			initRatingVars(rating);
			setRatingActiveWidth();

			if (rating.classList.contains('rating_set')) {
				setRating(rating);
			}
		}

		function initRatingVars(rating) {
			ratingActive = rating.querySelector('.rating__active');
			ratingValue = rating.querySelector('.rating__value span');
		}

		function setRatingActiveWidth(index = ratingValue.textContent) {
			const ratingActiveWidth = index / 0.05;
			ratingActive.style.width = `${ratingActiveWidth}%`;
		}

		function setRating(rating) {
			const ratingItems = rating.querySelectorAll('.rating__item');

			for (let i = 0; i < ratingItems.length; i++) {
				const ratingItem = ratingItems[i];

				ratingItem.addEventListener('mouseenter', () => {
					initRatingVars(rating);
					setRatingActiveWidth(ratingItem.value);
				});

				ratingItem.addEventListener('mouseleave', () => {
					setRatingActiveWidth();
				});

				ratingItem.addEventListener('click', () => {
					initRatingVars(rating);

					ratingValue.textContent = i + 1;
					setRatingActiveWidth();
				});
			}
		}
	}
})();
