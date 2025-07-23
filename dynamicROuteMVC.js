import express from 'express';
const app = express();

app.get("/", (req, res) => {
    const users = ['adi' , 'prince' , 'golu' ];
// res.json(users);
let data = `<ul>`;
for(let i = 0; i <users.length; i++) {

    data += `<li> <a href="/users/${i}"> ${users[i]}</li>`

     

    console.log(users[i]);

}
    data += `</ul>`
    res.send(data);
  })
  app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const users = ['adi' , 'prince' , 'golu' ];
    const user = users[id];
    res.send(user);
  })

  app.listen(3200);