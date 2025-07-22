import express from 'express';
import { handleUsers } from './controller/userController.js';
const app = express();

app.set("views engine", "ejs");

app.get('/users', handleUsers);


  app.listen(3200);