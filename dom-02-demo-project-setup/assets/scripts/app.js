const startAddMoviebtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMoviebtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMoviebtn = cancelAddMoviebtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSelection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSelection.style.display = 'block';
  } else {
    entryTextSelection.style.display = 'none';
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(children[movieIndex]);
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  // deleteMovie(movieId);
};

const rendorNewMovieList = (id, title, image, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}">
  </div>

  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearUserInput = () => {
  for (usrInputs of userInputs) {
    usrInputs.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
movies.push(newMovie);
console.log(movies);
closeMovieModal();
toggleBackdrop();
clearUserInput();
rendorNewMovieList(
  newMovie.id,
  newMovie.title,
  newMovie.image,
  newMovie.rating
);
updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

startAddMoviebtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMoviebtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMoviebtn.addEventListener('click', addMovieHandler);