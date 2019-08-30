const db = require("../../data/dbConfig");

module.exports = {
  add,
  findUserExpenses
};

function findUserExpenses(user_id) {
  return db("expense_users").where({ user_id });
}

async function add(expense_id, user_id, amount, title, category, date) {
  const [newExpense] = await db("expense_users")
    .insert({ expense_id, user_id, amount, title, category, date })
    .returning("*");

  return newExpense;
}
