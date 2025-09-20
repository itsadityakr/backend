import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("/api/v1/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    });

    return (
        <>
            <h1>Users</h1>
            <p>Total No. of Users: {users.length}</p>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
};

export default App;
