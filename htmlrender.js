import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const abspath = path.resolve('view')
const app = express();

//Using Middleware
// app.use((req, res, next) =>{
//     console.log("user Accessing " +req.url + "Page");
//     next();
// })


//Age Check Using Middleware
// function ageCheck(req, res, next) {
//     if (req.query.age || req.query.age < 18) {
//         console.log("User is " + req.query.age + " years old");
//         next();
//         } else {
//             res.send("You are not allowed to access this page");
//     }
// }
// app.use('/user', ageCheck);


//IP check using middleware

// function ipCheck(req, res, next) {
//     if (req.ip === '::1' || req.ip === '127.0.0.1') {
//         console.log("User is accessing from " + req.ip);
//         next();
//         } else {
//             res.send("You are not allowed to access this page");
//             }
// }
// app.use('/user', ipCheck);

//Check Age and IP using middleware

function chaeckAgeRouteMiddleware(req, res, next) {
    console.log(req.query.age);

    
    if(!req.query.age || req.query.age < 18) {
        res.send("You are not allowed to access this page");
    }
    else {
        next();
    }

}

//url encoded
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.sendFile(abspath + "/home.html")
    })

app.get('/login', (req, res) => {
    res.sendFile(abspath + "/login.html")
    })

app.get('/submit', (req, res) => {
    console.log("User Login Details: ", req.body);
    
    res.sendFile(abspath + "/submit.html")
    }) 

app.get('/about', (req, res) => {
    res.sendFile(abspath + "/about.html")
    })

app.get('/contact', chaeckAgeRouteMiddleware, (req, res) => {
    res.sendFile(abspath + "/contact.html")
    })

app.use((req, res) => {
    res.status(404).sendFile(abspath + "/4O4Page.html");
});

  
  app.listen(3200);