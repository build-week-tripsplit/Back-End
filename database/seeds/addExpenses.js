const expenseData = [
  {
    id: 1,
    title: "Hotel - Entire Trip",
    category: "Lodging",
    amount: 2500.0,
    date: 1561248000,
    user_id: 1,
    trip_id: 1,
    complete: true
  },
  {
    id: 2,
    title: "Food - Entire Trip",
    category: "Food/Beverage",
    amount: 2300.0,
    date: 1561248000,
    user_id: 1,
    trip_id: 1,
    complete: true
  },
  {
    id: 3,
    title: "Drinks in the Hotel Lounge",
    category: "Food/Beverage",
    amount: 60.0,
    date: 1561248000,
    user_id: 1,
    trip_id: 1,
    complete: true
  },
  {
    id: 4,
    title: "Hotel Expense",
    category: "Lodging",
    amount: 300.0,
    date: 1569974400,
    user_id: 1,
    trip_id: 2,
    complete: false
  },
  {
    id: 5,
    title: "Flight - Roundtrip for Two",
    category: "Transportation",
    amount: 2600.0,
    date: 1569974400,
    user_id: 1,
    trip_id: 2,
    complete: false
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("expenses")
    .truncate()
    .then(() => {
      // Inserts seed entries
      return knex("expenses").insert(expenseData);
    });
};
