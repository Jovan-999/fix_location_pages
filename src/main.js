const learnMoreBtn = document.querySelector(
  '.legal-representation__anchor-learn'
);
const text = document.querySelector('.legal-representation__description-learn');

learnMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('legal-representation__show-more');
  if (learnMoreBtn.innerText === 'Learn More') {
    learnMoreBtn.innerText = 'Learn Less';
  } else {
    learnMoreBtn.innerText = 'Learn More';
  }
});

// const readMoreBtn = document.querySelector(
//   '.legal-representation__anchor-read'
// );
// const text = document.querySelector('.legal-representation__description-learn');

// learnMoreBtn.addEventListener('click', (e) => {
//   text.classList.toggle('legal-representation__show-more');
//   if (learnMoreBtn.innerText === 'Learn More') {
//     learnMoreBtn.innerText = 'Learn Less';
//   } else {
//     learnMoreBtn.innerText = 'Learn More';
//   }
// });
