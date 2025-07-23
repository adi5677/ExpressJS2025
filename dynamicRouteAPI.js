import express from 'express';
import user from './user.json' with {type:'json'};
const app = express();

app.get("/", (req, res) => {
    res.json(user);
    res.send("User List API");
  })

  app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);

    let filteredData = user.filter((user)=>user.id == id) 
    res.json(filteredData);


    res.send(id);
  })

app.listen(3200)