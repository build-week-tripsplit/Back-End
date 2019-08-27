const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("expenses").select("*");
}

function findBy(filter) {
  return db("expenses").where(filter);
}

// async function add(expense) {
//   const [id] = await db("expenses").insert(expense);

//   return findById(id);
// }

async function add(expense) {
  const [newExpense] = await db("expenses")
    .insert(expense)
    .returning("*");

  return newExpense;
}

function findById(id) {
  return db("expenses")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("expenses")
    .where({ id })
    .update(changes)
    .then(expense => {
      return expense;
    });
}

function remove(id) {
  return db("expenses")
    .where({ id })
    .del()
    .then(expense => {
      if (expense) {
        return expense;
      } else {
        return null;
      }
    });
}