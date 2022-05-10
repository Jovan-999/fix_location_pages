const learnMoreBtn = document.querySelector(
  '.legal-representation__anchor-learn'
);
const text = document.querySelector('.legal-representation__description-learn');

learnMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('legal-representation__show-more');
  if (learnMoreBtn.innerHTML === '+&nbsp;&nbsp; Learn More') {
    learnMoreBtn.innerHTML = '-&nbsp;&nbsp; Learn Less';
  } else {
    learnMoreBtn.innerHTML = '+&nbsp;&nbsp; Learn More';
  }
});

const learnMore = document.querySelector('.unintentional-cost__anchor-learn');
const textLearn = document.querySelector('.unintentional-cost__paragraph-show');

learnMore.addEventListener('click', (e) => {
  textLearn.classList.toggle('unintentional-cost__show-more');
  if (learnMore.innerHTML === '+&nbsp;&nbsp; Learn More') {
    learnMore.innerHTML = '-&nbsp;&nbsp; Learn Less';
  } else {
    learnMore.innerHTML = '+&nbsp;&nbsp; Learn More';
  }
});

const readMoreBtn = document.querySelector('.process-page__anchor-read');
const textRead = document.querySelector('.process-page__read-paragraph');

readMoreBtn.addEventListener('click', (e) => {
  textRead.classList.toggle('process-page__show-more');
  if (readMoreBtn.innerHTML === '+&nbsp;&nbsp; Read More') {
    readMoreBtn.innerHTML = '-&nbsp;&nbsp; Read Less';
  } else {
    readMoreBtn.innerHTML = '+&nbsp;&nbsp; Read More';
  }
});
