require("dotenv").config();
// console.log(process.env) // to see all env variables

const express = require("express"); // CommonJS syntax
// import express from "express"; // ES6 module syntax
const app = express();

const githubUserData = {
    login: "itsadityakr",
    id: 2711,
    html_url: "https://github.com/itsadityakr",
    type: "User",
    user_view_type: "public",
    name: "Aditya Kumar",
};

app.get("/", (req, res) => {
    res.json(githubUserData);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`); //http://localhost:3000/
});
