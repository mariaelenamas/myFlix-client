import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => onMovieClick()}
    >
      {movie.Title}
    </div>
  );
};

MovieCard.proptypes = {
  Image: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Genre: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    })
  ),
  Description: PropTypes.string.isRequired,
  Directors: PropTypes.shape({
    Name: PropTypes.string,
    Birthday: PropTypes.string,
    Bio: PropTypes.string,
  }),
};
