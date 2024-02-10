import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";
import { useEffect, useState } from "react";

export const MovieCard = ({ movie, addToFav, checkIsFav, removeFromFav, addToWatch, remToWatch, checkIsWatch }) => {

  const [watch, setwatch] = useState(false)
  const toggleFavorite = (id) => {
    // setIsFavorite(!isFavorite);
    addToFav(id)
  };

  const removeFav = (id) => {
    removeFromFav(id)
  }

  const addtoWatch = (id) => {
    addToWatch(id)
  }
  const remtoWatch = (id) => {
    remToWatch(id)
  }

  const isWATCH = (id) => {
    checkIsWatch(id)

  }
  useEffect(() => {
    setwatch(checkIsWatch(movie._id))
  }, [watch])

  return (
    <Card className="h-100" style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={movie.Image} />
      <Card.Body>
        <Card.Title >{movie.Title}</Card.Title>
        <Card.Text>{movie.Directors.Name}</Card.Text>
        <Link className="seemore-button" to={`/movies/${encodeURIComponent(movie._id)}`}>
          See More
        </Link>
        {
          checkIsFav ? (
            <button
              variant={checkIsFav ? "danger" : "primary"}
              onClick={() => removeFav(movie._id)}
              className="favbutton"
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              variant={checkIsFav ? "danger" : "primary"}
              onClick={() => toggleFavorite(movie._id)}
              className="favbutton"
            >
              Add to Favorites
            </button>
          )
        }
        {
          watch ? (
            <button
              variant={isWATCH(movie._id) ? "danger" : "primary"}
              onClick={(id) => remtoWatch(movie._id)}
              className="favbutton"
            >
              Remove from to watch
            </button>
          ) : (
            <button
              variant={isWATCH(movie._id) ? "danger" : "primary"}
              onClick={(id) => addtoWatch(movie._id)}
              className="favbutton"
            >
              Add to Watch List
            </button>
          )
        }
      </Card.Body>
    </Card >
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
