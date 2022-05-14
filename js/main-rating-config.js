const allRates = document.querySelectorAll('.stars__value')

const reviewAmount = allRates.length;

let rateAmounts = {"5" : 0, "4" : 0, "3" : 0, "2" : 0, "1" : 0};

for (let element of allRates) {
    rateAmounts[element.innerHTML]++;
}

function getAverage(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += key * obj[key];
    }
    return sum / reviewAmount;
}

const mainRating = document.querySelector('.rating');

let mainRatingValue = mainRating.querySelector('.rating__value');

mainRatingValue.innerHTML = getAverage(rateAmounts);

let mainRatingActive = mainRating.querySelector('.rating__active');

mainRatingActive.style.width = `${mainRatingValue.innerHTML / 0.05}%`;

const allProgresses = document.querySelectorAll('.progress-bar');


for (let index = 0; index < allProgresses.length; index++) {
    const currentProgress = allProgresses[index];
    currentProgress.innerHTML = rateAmounts[5 - index];
    currentProgress.style.width = `${rateAmounts[5 - index] * 100 / reviewAmount}%`;
}

const anchor = document.querySelector('.review-anchor');

anchor.innerHTML = `${reviewAmount} reviews`;
