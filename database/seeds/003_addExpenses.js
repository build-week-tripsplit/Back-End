const expenseData = [
  {
    title: "Hotel - Entire Trip",
    category: "Lodging",
    amount: 2500.0,
    date: 1561248000,
    trip_id: 1,
    complete: true
  },
  {
    title: "Food - Entire Trip",
    category: "Food/Beverage",
    amount: 2300.0,
    date: 1561248000,
    trip_id: 1,
    complete: true
  },
  {
    title: "Drinks in the Hotel Lounge",
    category: "Food/Beverage",
    amount: 60.0,
    date: 1561248000,
    trip_id: 1,
    complete: true
  },
  {
    title: "Hotel Expense",
    category: "Lodging",
    amount: 300.0,
    date: 1569974400,
    trip_id: 2,
    complete: false
  },
  {
    title: "Flight - Roundtrip for Two",
    category: "Transportation",
    amount: 2600.0,
    date: 1569974400,
    trip_id: 2,
    complete: false
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("expenses")
      //.truncate()
      .then(() => {
        // Inserts seed entries
        return knex("expenses").insert(expenseData);
      })
  );
};
