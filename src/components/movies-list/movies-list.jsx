import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { MoviesFilter } from "../movies-filter/movies-filter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const MoviesList = ({ addToWatch, remToWatch, checkIsWatch }) => {
    const movies = useSelector((state) => state.movies.list);
    const filter = useSelector((state) =>
        state.movies.filter).trim().toLowerCase();
    const filteredMovies = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(filter)
    );
    const addtoWatch = (id) => {
        addToWatch(id)
    }
    const remtoWatch = (id) => {
        remToWatch(id)
    }
    return (
        <>
            <Row>
                <MoviesFilter />
            </Row>
            <Row>
                {movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                ) : (
                    filteredMovies.map((movie) => (
                        <Col className="mb-4" key={movie._id} md={3}>
                            <MovieCard movie={movie} addToWatch={(id) => addtoWatch(id)} remToWatch={(id) => remtoWatch(id)} checkIsWatch={(id) => checkIsWatch(id)} />
                        </Col>
                    ))
                )}
            </Row>
        </>
    );
};
