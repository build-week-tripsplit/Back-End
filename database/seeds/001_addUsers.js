const faker = require("faker");
const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 10);

const usersData = [
  {
    username: "bsmith",
    email: "bob.smith@gmail.com",
    password: hash,
    firstName: "Bob",
    lastName: "Smith"
  },
  {
    username: "larry",
    email: "larryj@gmail.com",
    password: hash,
    firstName: "Larry",
    lastName: "Johnson"
  },
  {
    username: "suzieQ",
    email: "suzz87@gmail.com",
    password: hash,
    firstName: "Suzan",
    lastName: "Edmond"
  },
  {
    username: "jen_nifer",
    email: "jen.g.m@gmail.com",
    password: hash,
    firstName: "Jennifer",
    lastName: "Gewin"
  },
  {
    username: "jake-boy",
    email: "jake_swanson_91@gmail.com",
    password: hash,
    firstName: "Jake",
    lastName: "Swanson"
  },
  {
    username: "sam_say_what",
    email: "samanthasmith@gmail.com",
    password: hash,
    firstName: "Sam",
    lastName: "Smith"
  },
  {
    username: "hail_hailey",
    email: "haileyjohnson@gmail.com",
    password: hash,
    firstName: "Hailey",
    lastName: "Johnson"
  },
  {
    username: "tessalate",
    email: "tessasmiles@gmail.com",
    password: hash,
    firstName: "Tessa",
    lastName: "Peterson"
  },
  {
    username: "tytytheguy",
    email: "ty@gmail.com",
    password: hash,
    firstName: "Ty",
    lastName: "Rogers"
  },
  {
    username: "amber_ok",
    email: "amber.rogers@gmail.com",
    password: hash,
    firstName: "Amber",
    lastName: "Rogers"
  }
];

exports.seed = function(knex, Promise) {
  return (
    knex("users")
      //.truncate()
      .then(() => {
        return knex("users").insert(usersData);
      })
  );
};
