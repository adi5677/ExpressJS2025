import express from "express";
import multer from "multer";

const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get("/",(req, res) => {
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <button type="submit">Upload</button>
        </form>
        `)
})

app.post("/upload", upload.single("myfile"), (req, res) => {
    res.send({
        message: "File uploaded successfully",
        info : req.file
    })
});

app.listen(3200)