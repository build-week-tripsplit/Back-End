const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserExpenses,
  remove,
  findExpenseUsers,
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

// function findUserExpenses(user_id) {
//   return db("expenses").where({ user_id });
// }

function findExpenseUsers() {
  return db("expense_users").select("*");
}

// Chance change
function findUserExpenses(user_id) {
  return db("expense_users").where({ user_id });
}

// async function add(expense) {
//   const [id] = await db("expenses").insert(expense);

//   return findById(id);
// }

async function add(expense) {
  // return await db("expenses").insert(expense);

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
