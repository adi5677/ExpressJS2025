import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page!</h1>");
  });

  app.get("/users", (req, res) => {
    res.send("<h1>Users Page!</h1>");
  });
  app.get("/error", (req, res, next) => {
    // res.send("<h1>Error Page!</h1>");
    const error = new Error(" ");
    next (error);


  });

  function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).send("<h1>Internal Server Error!</h1>");
    }
    app.use(errorHandler);
  app.listen(3600);