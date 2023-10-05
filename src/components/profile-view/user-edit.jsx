import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const UserEdit = ({ user, token, updateUser, onLoggedOut }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [formData, setFormData] = useState({
        username: user.Username,
        password: "",
        email: user.Email,
        birthday: user.Birthday,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
        };
        fetch(
            `https://movie-api-n1v9.onrender.com/users/${user.Username}`,
            {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((response) => {
            if (response.ok) {
                alert("User information has been updated!");
                updateUser(data);
                // onLoggedOut();
            } else {
                console.log(data);
                alert("Something went wrong");
            }
        }
        ).catch((e) => {
            alert(e.message);
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="text-center white-text">Update your Profile</h2>
            <Form.Group controlId="formUsername">
                <Form.Label className="white-text">Username:</Form.Label>
                <Form.Control
                    className="bg-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    minLength="3"
                    required
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label className="white-text">Password:</Form.Label>
                <Form.Control
                    className="bg-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="3"
                    required
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label className="white-text">Email:</Form.Label>
                <Form.Control
                    className="bg-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBirthday">
                <Form.Label className="white-text">Birthday:</Form.Label>
                <Form.Control
                    className="bg-input"
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="btnsubmit">
                Submit
            </Button>
        </Form>
    );
};