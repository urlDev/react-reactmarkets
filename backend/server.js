const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: process.env.NAME,
    password: process.env.PASSWORD,
    database: "reactmarkets",
  },
});

db.select("*")
  .from("users")
  .then((data) => {
    console.log(data);
  });

const app = express();
const port = 3001;

// this is a middleware to parse json
app.use(express.json());
app.use(cors());

// we dont have database yet so we are creating it here as a variable
const database = {
  users: [
    {
      id: "123",
      name: "Can",
      email: "can@gmail.com",
      password: "cookies",
      stocks: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Tiiu",
      email: "tiiu@gmail.com",
      password: "bananas",
      stocks: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/profile/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/profile/signup", (req, res) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, null, null, function (err, hash) {
    // console.log(hash);
  });
  db("users")
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then(console.log);

  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.json("No such user");
  }
});

app.put("/portfolio", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.stocks++;
      return res.json(user.stocks);
    }
  });
  if (!found) {
    res.json("No such user");
  }
});

app.listen(port, () => {
  console.log("App listening");
});

// bcrypt.hash("bacon", null, null, function(err, hash) {
//   // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

/*

in home page, response will tell us its working
/ => res = this is working

in signing, we will be able to post(signing them in) user, 
and response as success or fail
/signin => POST = success/fail

in register, we will post new user
/register => POST = user

in profile page, we will get user by their id
/profile/:userId => GET = user

in portfolio page, we will show their saved stocks
/portfolio => PUT => user


*/
