import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = "college"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url);

async function dbCOnnection() {

    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection('students')

    const result = await collection.find().toArray();
    console.log(result);
    
}

dbCOnnection();

const app = express();
app.listen(3200);