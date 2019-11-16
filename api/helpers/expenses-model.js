const db = require("../../database/dbConfig");

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

function findById(id) {
  return db("expenses")
    .where({ id })
    .first();
}

async function add(expense) {
  const [newExpense] = await db("expenses")
    .insert(expense)
    .returning("*");

  return newExpense;
}

async function update(changes, id) {
  const [updatedExpense] = await db("expenses")
    .where({ id })
    .update(changes)
    .returning("*");
  return updatedExpense;
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
