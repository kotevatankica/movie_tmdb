const BASE_URL = "https://api.themoviedb.org/3/search/movie?";
const API_KEY = "7a207a989aeaf9ab9b002d2d8c44945c";

export const fetchMovies = (query, page = 1) => (
  fetch(`${BASE_URL}api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(res => {
      if (!res.ok) return { error: true };
      return res.json();
    })
);

export const imgURLBuilder = (filename, size = "w185") => {
  if (!filename) return require("../img/photo.svg");
  return `https://image.tmdb.org/t/p/${size}${filename}`;
};