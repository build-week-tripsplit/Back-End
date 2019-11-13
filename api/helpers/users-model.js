const db = require("../../data/dbConfig");

module.exports = {
  find,
  findById,
  findByUsername,
  add,
  remove
};

function find() {
  return db("users").select(
    "id",
    "username",
    "email",
    "first_name",
    "last_name"
  );
}

// function find(filter) {
//   if (!filter) {
//     return db("users");
//   } else {
//     return db("users").where(filter);
//   }
// }

function findById(id) {
  return db("users")
    .where({ id })
    .first()
    .select("id", "username", "email", "first_name", "last_name");
}

function findByUsername(username) {
  return db("users")
    .where({ username })
    .first();
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
