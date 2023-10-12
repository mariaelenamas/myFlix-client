import React from "react";

export const UserInfo = ({ user }) => {
    const date = () => {
        let BD = new Date(user.Birthday)
        return BD.toLocaleDateString()
    }
    return (
        <>
            <p>User : {user.Username} </p>
            <p>Email: {user.Email} </p>
            <p>Date of birth: {date()} </p>
        </>
    );
};
