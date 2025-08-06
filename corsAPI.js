import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send({
        name:"Aditya",
        age: 20,
        email: "adis6469@gmail.com"
    })
})

app.listen(3200)