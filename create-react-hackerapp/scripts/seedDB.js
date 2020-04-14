const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hackerapp"
);

const userSeed = [
  {
    name: "Benjamin Franklin",
    nickname: "",
    email: "",
    picture: "",
    user_id: "bj369",
    date: new Date(Date.now())
  },
  {
    name: "Nicholas Tesla",
    nickname: "",
    email: "",
    picture: "",
    user_id: "nt543",
    date: new Date(Date.now())
  },
  {
    name: "James Brown",
    nickname: "",
    email: "",
    picture: "",
    user_id: "jb789",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
