const faker = require("faker");
const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 10);

const user1 = {
  id: 1,
  username: "username",
  email: "email@email.com",
  password: hash,
  firstName: "Bob",
  lastName: "Smith"
};

const createFakeUser = id => ({
  id,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: hash,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(() => {
      let fakeUsers = [];
      const desiredFakeUsers = 101;

      fakeUsers.push(user1);

      for (let i = 2; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakeUser(i));
      }

      return knex("users").insert(fakeUsers);
    });
};
