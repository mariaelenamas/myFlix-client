import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("myFlixUser"));
  const storedToken = localStorage.getItem("myFlixToken");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://movie-api-n1v9.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((res) => {
        setMovies(res);
      });
  }, [token]);

  // if (selectedMovie) {
  //   return (
  //     <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  //   );
  // }


  return (
    <Row className="justify-content-md-center my-3">
      {!user ? (
        <Col md={5}>
          <div style={{ color: "white" }}>
            <LoginView onLoggedIn={(user) => setUser(user)} style={{ color: "white" }} />
            <p style={{ margin: "30px 120px" }}>OR</p>
            <SignupView style={{ color: "white" }} />
          </div>
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />

        </Col>
      ) : movies.length === 0 ? (
        <div style={{ color: "white" }}>The list is empty!</div>
      ) : (
        <>
          {movies.map((movie) => (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)}
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};
