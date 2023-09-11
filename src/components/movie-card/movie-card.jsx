export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => onMovieClick()}
    >
      {movie.Title}
    </div>
  );
};
