import React from 'react';
import { UserInfo } from "./user-info";
import { UserEdit } from "./user-edit";
import { MovieCard } from "../movie-card/movie-card";
import { Col, Button } from "react-bootstrap";

export const ProfileView = ({
    user,
    token,
    movies,
    updateUser,
    onLoggedOut,
}) => {
    let favoriteMovies = movies.filter((m) =>
        user.FavoriteMovies.includes(m._id)
    );

    const deleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
            fetch(`https://movie-api-n1v9.onrender.com/users/${user.Username}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Account has been deleted!");
                        onLoggedOut();
                    } else {
                        alert("Account cannot be deleted");
                    }
                })
                .catch((e) => {
                    alert(e);
                });
        }
    };
    return (
        <>
            <Col>
                <UserInfo user={user} />
                <UserEdit
                    user={user}
                    token={token}
                    updateUser={updateUser}
                    onLoggedOut={onLoggedOut}
                />
                <Button
                    className="mt-4"
                    variant="danger"
                    type="submit"
                    onClick={() => {
                        if (confirm("Sure to delete your account?")) {
                            deleteAccount();
                        }
                    }}
                >
                    Delete your Account
                </Button>
            </Col>
            <Col>
                <h3 className="mt-3 mb-3 white-text">Your favorite movies:</h3>
            </Col>
            {favoriteMovies.map((movie) => (
                <Col key={movie.id} className="mb-4" xl={2} lg={3} md={4} xs={6}>
                    <MovieCard movie={movie} />
                </Col>
            ))}
        </>
    );
};
