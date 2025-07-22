import express from 'express';
const app = express();

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.get('/users', (req, res) => {
    const users = [
        {name: 'Adi', age: 25},
        {name: 'Prince', age: 20},
        {name: 'Golu', age: 15}
    ]
    res.render("users",{users: users});
})

app.listen(3200)