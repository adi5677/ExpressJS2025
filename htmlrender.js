import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const abspath = path.resolve('view')
const app = express();

//Using Middleware
app.use((req, res, next) =>{
    console.log("user Accessing " +req.url + "Page");
    next();
})

app.get('/', (req, res) => {
    res.sendFile(abspath + "/home.html")
    })

app.get('/login', (req, res) => {
    res.sendFile(abspath + "/login.html")
    })

app.get('/submit', (req, res) => {
    res.sendFile(abspath + "/submit.html")
    }) 

app.get('/about', (req, res) => {
    res.sendFile(abspath + "/about.html")
    })

app.get('/contact', (req, res) => {
    res.sendFile(abspath + "/contact.html")
    })

app.use((req, res) => {
    res.status(404).sendFile(abspath + "/4O4Page.html");
});

  
  app.listen(3200);