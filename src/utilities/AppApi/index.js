export const fetchMovies = async (searchTerm) => {
  console.log(' search term ', searchTerm)
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm || 'star'}&country=au&media=movie`
    );
    const json = await response.json();
    console.log('Fetched movie data:', json);
    return json.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
