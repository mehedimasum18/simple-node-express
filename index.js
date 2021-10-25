const express = require('express');
const cors=require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I am wting for yoru");
});

const users= [
  { id: 0, name: "roni", email: "roni@gnail.com" },
  { id: 1, name: "sani", email: "sani@gnail.com" },
  { id: 2, name: "pani", email: "pani@gnail.com" },
  { id: 3, name: "jani", email: "jani@gnail.com" },
  { id: 4, name: "lani", email: "lani@gnail.com" }
];

app.get("/users", (req, res) => {
    const search = req.query.search;
    // use query parameter 
    if (search) {
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
          res.send(users);

    } 
});


// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hetting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser)
})

// dynamic api

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = [id]
    res.send(user)
//   const user = console.log(req.params.id);
});


app.listen(port, () => {
  console.log("Listening node");
}); 