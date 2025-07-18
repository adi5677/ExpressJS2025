// app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Setup __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensures correct path to views

// Routes
app.get("/add-user", (req, res) => {
  res.render("addUser"); // Renders views/addUser.ejs
});

app.get("/submit-user", (req, res) => {
  console.log(req.query); // form submitted via GET
  res.render("submitUser", req.query); // Send form data to template
});

// Start server
app.listen(3200, () => {
  console.log("Server running at http://localhost:3200/add-user");
});
 