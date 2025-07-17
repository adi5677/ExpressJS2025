const express = require('express');
const { homePage } = require('./home1');
const { default: home } = require('./pages/home');


const app = express();

app.get("", (req, res) => {
  res.send(home)
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about page!</h1>")
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is contact page!</h1>")
});

app.listen(3200)