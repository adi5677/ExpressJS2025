import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = "college"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url);

// async function dbCOnnection() {

    // await client.connect()
    // const db = client.db(dbName);
    // const collection = db.collection('students')

    // const result = await collection.find().toArray();
    // console.log(result);
    
// }

// dbConnection();

const app = express();

app.set("view engine", "ejs");

app.listen(3200)

app.get("/", async (req, res) => {

    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection('students')

    const students = await collection.find().toArray();
    console.log(students);

    // res.send("Data will be hare");
    res.render('students', {students: students})
  })

app.listen(3200);