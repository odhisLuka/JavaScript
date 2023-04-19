const startAddMoviebtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMoviebtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMoviebtn = cancelAddMoviebtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearUserInput = () => {
  for (usrInputs of userInputs) {
    userInputs.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearUserInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please, enter valid rating values between 1 and 5');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
movies.push(newMovie);
console.log(movies);
toggleMovieModal();
clearUserInput();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMoviebtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMoviebtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMoviebtn.addEventListener('click', );