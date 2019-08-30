const expenseData = [
  {
    title: "Hotel - Entire Trip",
    category: "Lodging",
    amount: 2500.0,
    date: 1546387932,
    trip_id: 1,
    complete: true
  },
  {
    title: "Food - Entire Trip",
    category: "Food/Beverage",
    amount: 550.0,
    date: 1546733532,
    trip_id: 1,
    complete: true
  },
  {
    title: "Drinks in the Hotel Lounge",
    category: "Food/Beverage",
    amount: 80.0,
    date: 1546733532,
    trip_id: 1,
    complete: true
  },
  {
    title: "Hostel Expense",
    category: "Lodging",
    amount: 300.0,
    date: 1551485532,
    trip_id: 2,
    complete: true
  },
  {
    title: "Flight - Roundtrip",
    category: "Transportation",
    amount: 4500.0,
    date: 1551485532,
    trip_id: 2,
    complete: true
  },
  {
    title: "Beach Party!",
    category: "Entertainment",
    amount: 100.0,
    date: 1552090332,
    trip_id: 2,
    complete: true
  },
  {
    title: "Bike Rental",
    category: "Transportation",
    amount: 200.0,
    date: 1552090332,
    trip_id: 2,
    complete: true
  },
  {
    title: "Gas - Road Trip",
    category: "Transportation",
    amount: 250.0,
    date: 1560039132,
    trip_id: 3,
    complete: true
  },
  {
    title: "Park Tickets",
    category: "Entertainment",
    amount: 1200.0,
    date: 1560039132,
    trip_id: 3,
    complete: true
  },
  {
    title: "Club",
    category: "Entertainment",
    amount: 90.0,
    date: 1566087132,
    trip_id: 4,
    complete: true
  },
  {
    title: "Drinks",
    category: "Food/Beverage",
    amount: 120.0,
    date: 1566087132,
    trip_id: 4,
    complete: true
  },
  {
    title: "Uber",
    category: "Transportation",
    amount: 20.0,
    date: 1566087132,
    trip_id: 4,
    complete: false
  },
  {
    title: "Cruise Tix",
    category: "Entertainment",
    amount: 12000.0,
    date: 1575331932,
    trip_id: 5,
    complete: false
  },
  {
    title: "Drinks/Extras",
    category: "Food/Beverage",
    amount: 800.0,
    date: 1575331932,
    trip_id: 5,
    complete: false
  },
  {
    title: "Hotel",
    category: "Lodging",
    amount: 2000.0,
    date: 1581120732,
    trip_id: 6,
    complete: false
  },
  {
    title: "Flights - Round Trip",
    category: "Transportation",
    amount: 8400.0,
    date: 1581120732,
    trip_id: 6,
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
