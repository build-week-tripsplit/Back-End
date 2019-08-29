const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findUserExpenses,
  remove,
  update
};

function find() {
  return db("expense_users").select("*");
}

function findBy(filter) {
  return db("expense_users").where(filter);
}

// function findById(id) {
//   return db("expense_users")
//     .where({ id })
//     .first();
// }

function findUserExpenses(user_id) {
  return db("expense_users").where({ user_id });
}

// async function add(expense) {
//   const [id] = await db("expense_users").insert(expense);

//   return findById(id);
// }

async function add(expense_id, user_id, amount) {
  const [newExpense] = await db("expense_users")
    .insert({ expense_id, user_id, amount })
    .returning("*");

  return newExpense;
}

async function update(changes, id) {
  const [updatedExpense] = await db("expense_users")
    .where({ id })
    .update(changes)
    .returning("*");
  return updatedExpense;
}

function remove(id) {
  return db("expense_users")
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
