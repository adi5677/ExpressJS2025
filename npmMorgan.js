import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("<h1>Home Page!</h1>");
  });

  app.get("/users", (req, res) => {
    res.send("<h1>Users Page!</h1>");
  });

   app.get("/wait", (req, res) => {
    setTimeout(() => {
        res.send("<h1>Waiting Page!</h1>");
    }, 2000);
  });
app.listen(3100);