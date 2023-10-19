import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProfileView } from "../profile-view/profile-view";

import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";


export const MainView = () => {
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("myFlixUser"));
  const storedToken = localStorage.getItem("myFlixToken");
  // const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const movies = useSelector((state) => state.movies);
  const user = useSelector((state) => state.user);
  //const token = useSelector((state) => state.user );

  useEffect(() => {
    console.log(token)
    if (!token) {
      return;
    }
    console.log(user)
    fetch("https://movie-api-n1v9.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(setMovies(res));
      });
  }, [token]);

  // if (selectedMovie) {
  //   return (
  //     <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  //   );
  // }

  // Add movie to Favorites 
  const addToFav = (movieId) => {

    fetch(`https://movie-api-n1v9.onrender.com/users/${user.Username}/movies/${movieId}`, {
      method: "Post",
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => response.json()).then(data => {
      console.log('added', data)
      setUser(data)
      localStorage.setItem("myFlixUser", JSON.stringify(data));
    })

  }

  const removeFromFav = (movieId) => {

    fetch(`https://movie-api-n1v9.onrender.com/users/${user.Username}/${movieId}`, {
      method: "Delete",
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => response.json()).then(data => {
      console.log('deleted', data)
      setUser(data)
      localStorage.setItem("myFlixUser", JSON.stringify(data));
    })
  }

  const checkIsFav = (id) => {
    const fav = user.FavoriteMovies.includes(id)
    return fav
  }

  const onLoggedOut = () => {
    setUser(null);
  }

  return (
    <BrowserRouter>
      <NavigationBar />

      <Row className="justify-content-md-center my-3">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView setToken={setToken} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:id"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col style={{ color: "white" }}>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <ProfileView user={user}
                    movies={movies}
                    onLoggedOut={onLoggedOut}
                    token={token}
                    addToFav={(id) => addToFav(id)}
                    removeFromFav={(id) => removeFromFav(id)}
                  />
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col style={{ color: 'white' }}>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie._id} md={3}>
                        <MovieCard movie={movie}
                          addToFav={(id) => addToFav(id)}
                          checkIsFav={checkIsFav(movie._id)}
                          removeFromFav={(id) => removeFromFav(id)}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

        </Routes>
      </Row>
    </BrowserRouter>
  );
};
