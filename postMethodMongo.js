import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();

app.use(express.json());

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

app.post('/save', async (req, res) => {
    console.log(req.body);
    const studentData = new studentModel({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    })

    await studentData.save();

    res.send({

        message: "Data saved successfully",
        success: true,
        storedInfo: studentData

    })
})

app.put('/update/:id', async (req, res) => {
    const studentId = req.params.id;
    const updatedData = await studentModel.findByIdAndUpdate(
    studentId, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    }, { new: true }
);
    res.send(updatedData);
});

app.listen(3200);


