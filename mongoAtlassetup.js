import { MongoClient } from 'mongodb';

const url = "mongodb+srv://adis6469:Aditya5677@cluster0.3wm9rb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const databaseName = "school";
const collectionName = "student";
const client = new MongoClient(url);
client.connect().then(() => {
    console.log("Connected to MongoDB Atlas");
})

async function dbConnection() {
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    console.log("Data from MongoDB Atlas:", result);
}
dbConnection();
// client.close();

export { dbConnection }; 