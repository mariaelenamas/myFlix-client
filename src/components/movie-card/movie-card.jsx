import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100" style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={movie.Image} />
      <Card.Body>
        <Card.Title >{movie.Title}</Card.Title>
        <Card.Text>{movie.Directors.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link" style={{ margin: "-13px" }}>
            See more
          </Button>
        </Link>
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
