export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.Image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Year: </span>
        <span>{movie.Year}</span>
      </div>
      <div>
        <span>Genres: </span>
        {movie.Genre.map((genre, index) => (
          <span key={index}>
            {genre.Name}
            {index < movie.Genre.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Directors: </span>
        <span>{movie.Directors.Name}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
