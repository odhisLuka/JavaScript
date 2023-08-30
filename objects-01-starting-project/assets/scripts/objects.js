// Get all DOM elements
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Create an empty array for the infromation of movies added
const movies = [];

// function to display movie list on viewport
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const { info } = movie;
    let text = info.title + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}:  ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

// funtion to store movies, and extra infromation of movie
const addMovies = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  renderMovies();
};

// funtion to search for movies

const searchMovie = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

// add event listeners
addMovieBtn.addEventListener("click", addMovies);
searchBtn.addEventListener("click", searchMovie);
