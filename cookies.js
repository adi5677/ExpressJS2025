import express from 'express';
const app = express();


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    let cookiesData = req.get('cookie');
    cookiesData = cookiesData.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=').map(c => c.trim());
        acc[key] = value;
        return acc;
    }, {});
    res.render('home', { cookies: cookiesData });   
    res.render('homec');
})

app.get('/login', (req, res) => {
    res.render('loginc');
})

app.get('/profile', (req, res) => {
    res.setHeader('Set-Cookie', "login=true; Max-Age=3600; HttpOnly");
    res.setHeader('Set-Cookie', "name="+req.body.name);
    res.render('profilec');
})

app.listen(3200)
