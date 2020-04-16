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

const app = express();
const port = 3001;

// this is a middleware to parse json
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(db.users);
});

app.post("/profile/signin", (req, res) => {
  db.select("email", "hash")
    .where("email", "=", req.body.email)
    .from("login")
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("Unable to get user"));
      } else {
        res.status(400).json("Wrong credentials");
      }
    })
    .catch((err) => res.status(400).json("Wrong credentials"));
});

app.post("/profile/signup", (req, res) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);

  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date(),
          })
          .then((user) => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("Unable to register"));
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch((err) => res.status(400).json("Error getting user"));
});

app.put("/portfolio", (req, res) => {
  const { id } = req.body;
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
