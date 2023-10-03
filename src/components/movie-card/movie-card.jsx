import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="h-100" style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={movie.Image} />
      <Card.Body>
        <Card.Title >{movie.Title}</Card.Title>
        <Card.Text>{movie.Directors.Name}</Card.Text>
        <Link className="seemore-button" to={`/movies/${encodeURIComponent(movie._id)}`}>
          See More
        </Link>
        <button
          variant={isFavorite ? "danger" : "primary"}
          onClick={toggleFavorite}
          className="favbutton"
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
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
