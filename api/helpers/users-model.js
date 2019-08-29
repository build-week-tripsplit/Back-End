const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByUsername
};

function find() {
  return db("users").select("*");
}

function findBy(filter) {
  return db("users").where(filter);
}

// async function add(user) {
//   const [id] = await db("users").insert(user);

//   return findById(id);
// }

async function add(user) {
  const [newUser] = await db("users")
    .insert(user)
    .returning("*");

  return newUser;
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}
