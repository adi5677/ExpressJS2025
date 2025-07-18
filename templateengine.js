import express from 'express';
const app = express();

// Set the folder where your .ejs files are
app.set("views", "./ejs");

// Tell Express to use EJS as the templating engine
app.set("view engine", "ejs");

// Route handler
app.get("/", (req, res) => {
  res.render("home"); // will look for ejs/home.ejs
});

// Start server
app.listen(3500);