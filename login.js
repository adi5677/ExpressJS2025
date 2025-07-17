const express = require("express");
// const home1 = require("./pages/home");
const { default: home } = require("./pages/home.js");
const { default: login } = require("./pages/loginp.js");
const { default: submit } = require("./pages/submit.js");

const app = express();

app.get("/", (req, res) => {
  res.send(home());
})

app.get("/login", (req, res) => {
  res.send(login());
})

app.post("/submit", (req, res) => {
  res.send(submit());
})

app.listen(3400)