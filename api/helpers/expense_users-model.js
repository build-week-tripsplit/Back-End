const db = require("../../data/dbConfig");

module.exports = {
  add,
  findUserExpenses
};

// function find() {
//   return db("expense_users").select("*");
// }

// function findBy(filter) {
//   return db("expense_users").where(filter);
// }

// function findUserExpenses(user_id) {
//   return db("expense_users")
//     .where({ user_id })
//     .returning("*");
// }

function findExpenseUsers() {
  return db("expense_users").select("*");
}

// Chance change
function findUserExpenses(user_id) {
  return db("expense_users").where({ user_id });
}

async function add(expense_id, user_id, amount, title, category, date) {
  const [newExpense] = await db("expense_users")
    .insert({ expense_id, user_id, amount, title, category, date })
    .returning("*");

  return newExpense;
}

// async function update(changes, id) {
//   const [updatedExpense] = await db("expense_users")
//     .where({ id })
//     .update(changes)
//     .returning("*");
//   return updatedExpense;
// }

// function remove(id) {
//   return db("expense_users")
//     .where({ id })
//     .del()
//     .then(expense => {
//       if (expense) {
//         return expense;
//       } else {
//         return null;
//       }
//     });
// }
