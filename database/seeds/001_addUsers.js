const faker = require("faker");
const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 10);

const usersData = [
  {
    username: "username",
    email: "email@email.com",
    password: hash,
    firstName: "Bob",
    lastName: "Smith"
  },
  {
    username: "username2",
    email: "email2@email.com",
    password: hash,
    firstName: "Lazy",
    lastName: "Larry"
  },
  {
    username: "username3",
    email: "email3@email.com",
    password: hash,
    firstName: "John",
    lastName: "Doe"
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
