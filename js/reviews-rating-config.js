const allRatings = document.querySelectorAll('.stars');

if (allRatings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let i = 0; i < allRatings.length; i++) {
        const currentRating = allRatings[i];
        initRating(currentRating);
    }


    function initRating(rating) {
        initVariables(rating);
        setActiveWidth();
    }

    function initVariables(rating) {
        ratingActive = rating.querySelector('.stars__active');
        ratingValue = rating.querySelector('.stars__value');
    }

    function setActiveWidth(starsAmount = ratingValue.innerHTML) {
        ratingActive.style.width = `${starsAmount / 0.05}%`;
    }
}
