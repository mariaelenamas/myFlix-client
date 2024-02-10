import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./movie-view.scss";
import { useSelector } from "react-redux";

export const MovieView = () => {
  const { id } = useParams();
  // const movies = useSelector((state) => state.movies); Changed with the following:
  const movies = useSelector((state) => state.movies.list);
  const movie = movies.find((m) => m._id === id);

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
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
      </div>
    </Card>
  );
};
