const startAddMoviebtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMoviebtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMoviebtn = cancelAddMoviebtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSelection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSelection.style.display = 'block';
  } else {
    entryTextSelection.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};


const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
  
  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
  
  confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
  
  // confirmDeletionBtn.removeEventListener('click',  deleteMovieHandler.bind(null, movieId)); // doesn't work
  cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal); // clear an existing addEventListener before we add a new one

  cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionBtn.addEventListener('click',  deleteMovieHandler.bind(null, movieId));
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
  newMovieElement.addEventListener(
    'click', 
    startDeleteMovieHandler.bind(null, id))
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
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
  toggleBackdrop();
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