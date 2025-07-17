import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.get('/', (req, res) => {
    const abspath = path.resolve('view/home.html')
    res.sendFile(abspath)
    })

app.get('/login', (req, res) => {
    const abspath = path.resolve('view/login.html')
    res.sendFile(abspath)
    }) 

app.get('/about', (req, res) => {
    const abspath = path.resolve('view/about.html')
    res.sendFile(abspath)
    })
  
  app.listen(3200);