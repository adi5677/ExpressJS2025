import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = "college"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()
app.use(express.urlencoded({extended: false}))
// app.use(express.json())
app.set("view engine", "ejs")
client.connect().then((connection) => {
    const db = connection.db(dbName);

    app.get("/api", async (req, res) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        // res.json(students);
        // console.log(students);
        res.send(students)
    })

    app.get("/ui",async (req, res) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        res.render('students', {students: students})
    })

    app.get('/add', (req, res) => {
        res.send(`<form action="add-student" method="post">
            <input type="text" name="name" placeholder="Enter your name">
            <br/><br/>
            <input type="text" name="roll" placeholder="Enter your roll">
            <br/><br/>
            <input type="text" name="email" placeholder="Enter your email">
            <br/><br/>
            <button>Add Student</button>
            </form>`)
    })

    app.post("/add-student", async (req, res) => {
        // console.log(req.bod  y);
        
        const collection = db.collection("students");
        const result = await collection.insertOne(req.body);
        res.send("Student added successfully");
        console.log(result);
        
        // const students = await collection.find().toArray();
        // // res.json(students);
        // // console.log(students);
        // res.send("data added ")
    })

    
})
app.listen(3200)