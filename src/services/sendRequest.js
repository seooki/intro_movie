export default () => {
  let url =
    "https://api.themoviedb.org/3/search/movie?query=spider&include_adult=true&language=en-US&page=1";
  const response = fetch(url);
  const result = response.json();

  return result;
};
