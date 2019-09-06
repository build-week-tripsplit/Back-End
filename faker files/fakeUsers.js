import faker from "faker";
const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 10);

function generateFakeUser() {
  let user = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: hash,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  };

  return user;
}

let fakeUsers = [];

faker.seed(123);

for (let i = 0; i < 100; i++) {
  fakeUsers.push(generateFakeUser());
}

console.log(fakeUsers);

//copied and pasted over to users seeds

const feels = [
  "happy",
  "sad",
  "laughing",
  "smiling",
  "angry",
  "excited",
  "fullfilled",
  "anxious",
  "loved"
];
