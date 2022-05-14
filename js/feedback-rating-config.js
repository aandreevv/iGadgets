const feedbackRating = document.querySelector('.evaluation');

let feedbackRatingActive = feedbackRating.querySelector('.evaluation__active');

let feedbackRatingValue = feedbackRating.querySelector('.evaluation__value');

setActiveWidth();

function setActiveWidth(width = feedbackRatingValue.innerHTML) {
    feedbackRatingActive.style.width = `${width / 0.05}%`;
}

const radioItems = feedbackRating.querySelectorAll('.evaluation__item');

for (let i = 0; i < radioItems.length; i++) {
    const radioItem = radioItems[i];

    radioItem.addEventListener('mouseenter', () => {
        setActiveWidth(radioItem.value);
    });

    radioItem.addEventListener('mouseleave', () => {
        setActiveWidth();
    });

    radioItem.addEventListener('click', () => {
        feedbackRatingValue.innerHTML = i + 1;
        setActiveWidth();
    })
}