import { Button, Card } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Card className="h-100 movie">
      <div>
        <div>
          <img className="w-100" src={movie.Image} />
        </div>
        <div>
          <strong>Title: </strong>
          <span>{movie.Title}</span>
        </div>
        <div>
          <strong>Year: </strong>
          <span>{movie.Year}</span>
        </div>
        <div>
          <strong>Genres: </strong>
          {Array.isArray(movie.Genre) ? (
            <ul>
              {movie.Genre.map((genre, index) => (
                <li key={index}>{genre.Name}</li>
              ))}
            </ul>
          ) : (
            <span>{movie.Genre.Name}</span>
          )}
        </div>
        <div>
          <strong>Description: </strong>
          <span>{movie.Description}</span>
        </div>
        <div>
          <strong>Directors: </strong>
          <span>{movie.Directors.Name}</span>
        </div>
        <Button
          onClick={onBackClick}
          className="back-button"
          style={{ cursor: "pointer" }}>
          Back
        </Button>
      </div>
    </Card>
  );
};
