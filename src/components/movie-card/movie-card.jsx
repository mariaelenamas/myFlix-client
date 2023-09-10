export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie.Image);
      }}
    >
      {movie.Title}
    </div>
  );
};
