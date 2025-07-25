import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

app.set("view engine", "ejs");

const dbName = "college"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url);

client.connect().then((connection)=>{

    const db = connection.db(dbName);

    app.get("/api", async (req, res) => {
        const collection = db.collection("students");   
        const students = await collection.find().toArray();
        res.json(students);
        console.log(students);
    })

    app.get("/ui", async (req, res) => {
        const collection = db.collection("students");   
        const students = await collection.find().toArray();
        res.render('students', {students: students})
    });

});

// async function dbCOnnection() {

    // await client.connect()
    // const db = client.db(dbName);
    // const collection = db.collection('students')

    // const result = await collection.find().toArray();
    // console.log(result);
    
// }

// dbConnection();



// app.listen(3200)

// app.get("/", async (req, res) => {

//     await client.connect()
//     const db = client.db(dbName);
//     const collection = db.collection('students')

//     const students = await collection.find().toArray();
//     console.log(students);

//     // res.send("Data will be hare");
//     res.render('students', {students: students})
//   })

app.listen(3200);