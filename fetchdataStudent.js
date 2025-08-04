import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";


const app = express();
mongoose.connect('mongodb://localhost:27017/college')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

app.get('/students', async (req, res) => {
  
        const studentData = await studentModel.find()
        res.send(studentData);
    
});

app.listen(3200);


// async function dbConnection() {
//     await mongoose.connect('mongodb://localhost:27017/college');    
//     const schema = new mongoose.Schema({
//         name: String,
//         age: Number,
//         email: String
//     });

//     const studentsModel = mongoose.model('students', schema);
//     const result = await studentsModel.find();
//     console.log(result);
    

// }

// dbConnection();