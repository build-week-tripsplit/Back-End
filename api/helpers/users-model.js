const db = require("../../data/dbConfig");

module.exports = {
  find,
  add,
  remove
};

function find(filter) {
  if (!filter) {
    return db("users");
  } else {
    return db("users").where(filter);
  }
}

async function add(user) {
  const [newUser] = await db("users")
    .insert(user)
    .returning("*");

  return newUser;
}

function remove(id) {
  return db("users")
    .where(id)
    .del();
}
