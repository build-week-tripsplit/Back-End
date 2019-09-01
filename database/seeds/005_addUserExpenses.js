const userExpenseData = [
  {
    expense_id: 1,
    user_id: 1,
    title: "Hotel - Entire Trip",
    category: "Lodging",
    amount: 1250.0,
    date: "2019-07-15",
    complete: true
  },
  {
    expense_id: 1,
    user_id: 2,
    title: "Hotel - Entire Trip",
    category: "Lodging",
    amount: 1250.0,
    date: "2019-07-15",
    complete: true
  },
  {
    expense_id: 2,
    user_id: 1,
    title: "Food - Entire Trip",
    category: "Food/Beverage",
    amount: 275.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 2,
    user_id: 2,
    title: "Food - Entire Trip",
    category: "Food/Beverage",
    amount: 275.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 3,
    user_id: 1,
    title: "Drinks in the Hotel Lounge",
    category: "Food/Beverage",
    amount: 40.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 3,
    user_id: 2,
    title: "Drinks in the Hotel Lounge",
    category: "Food/Beverage",
    amount: 40.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 4,
    user_id: 3,
    title: "Hostel Expense",
    category: "Lodging",
    amount: 100.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 4,
    user_id: 4,
    title: "Hostel Expense",
    category: "Lodging",
    amount: 100.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 4,
    user_id: 5,
    title: "Hostel Expense",
    category: "Lodging",
    amount: 100.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 5,
    user_id: 3,
    title: "Flight - Roundtrip",
    category: "Transportation",
    amount: 1500.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 5,
    user_id: 4,
    title: "Flight - Roundtrip",
    category: "Transportation",
    amount: 1500.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 5,
    user_id: 5,
    title: "Flight - Roundtrip",
    category: "Transportation",
    amount: 1500.0,
    date: "2019-07-20",
    complete: true
  },
  {
    expense_id: 6,
    user_id: 3,
    title: "Beach Party!",
    category: "Entertainment",
    amount: 33.33,
    date: "2019-07-30",
    complete: true
  },
  {
    expense_id: 6,
    user_id: 4,
    title: "Beach Party!",
    category: "Entertainment",
    amount: 33.33,
    date: "2019-07-30",
    complete: true
  },
  {
    expense_id: 6,
    user_id: 5,
    title: "Beach Party!",
    category: "Entertainment",
    amount: 33.33,
    date: "2019-07-30",
    complete: true
  },
  {
    expense_id: 7,
    user_id: 3,
    title: "Bike Rental",
    category: "Transportation",
    amount: 66.66,
    date: "2019-07-30",
    complete: true
  },
  {
    expense_id: 7,
    user_id: 4,
    title: "Bike Rental",
    category: "Transportation",
    amount: 66.66,
    date: "2019-07-30",
    complete: true
  },
  {
    expense_id: 7,
    user_id: 5,
    title: "Bike Rental",
    category: "Transportation",
    amount: 66.66,
    date: "2019-07-30",
    complete: true
  },
  {
    expense_id: 8,
    user_id: 1,
    title: "Gas - Road Trip",
    category: "Transportation",
    amount: 125.0,
    date: "2019-08-10",
    complete: true
  },
  {
    expense_id: 8,
    user_id: 6,
    title: "Gas - Road Trip",
    category: "Transportation",
    amount: 125.0,
    date: "2019-08-10",
    complete: true
  },
  {
    expense_id: 9,
    user_id: 1,
    title: "Park Tickets",
    category: "Entertainment",
    amount: 600.0,
    date: "2019-08-10",
    complete: true
  },
  {
    expense_id: 9,
    user_id: 6,
    title: "Park Tickets",
    category: "Entertainment",
    amount: 600.0,
    date: "2019-08-10",
    complete: true
  },
  {
    expense_id: 10,
    user_id: 7,
    title: "Club",
    category: "Entertainment",
    amount: 30.0,
    date: "2019-08-31",
    complete: true
  },
  {
    expense_id: 10,
    user_id: 8,
    title: "Club",
    category: "Entertainment",
    amount: 30.0,
    date: "2019-08-31",
    complete: true
  },
  {
    expense_id: 10,
    user_id: 10,
    title: "Club",
    category: "Entertainment",
    amount: 30.0,
    date: "2019-08-31",
    complete: true
  },
  {
    expense_id: 11,
    user_id: 7,
    title: "Drinks",
    category: "Food/Beverage",
    amount: 40.0,
    date: "2019-08-31",
    complete: true
  },
  {
    expense_id: 11,
    user_id: 8,
    title: "Drinks",
    category: "Food/Beverage",
    amount: 40.0,
    date: "2019-08-31",
    complete: true
  },
  {
    expense_id: 11,
    user_id: 10,
    title: "Drinks",
    category: "Food/Beverage",
    amount: 40.0,
    date: "2019-08-31",
    complete: true
  },
  {
    expense_id: 12,
    user_id: 7,
    title: "Uber",
    category: "Transportation",
    amount: 6.66,
    date: "2019-08-31",
    complete: false
  },
  {
    expense_id: 12,
    user_id: 8,
    title: "Uber",
    category: "Transportation",
    amount: 6.66,
    date: "2019-08-31",
    complete: false
  },
  {
    expense_id: 12,
    user_id: 10,
    title: "Uber",
    category: "Transportation",
    amount: 6.66,
    date: "2019-08-31",
    complete: false
  },
  {
    expense_id: 13,
    user_id: 1,
    title: "Cruise Tix",
    category: "Entertainment",
    amount: 3000.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 13,
    user_id: 6,
    title: "Cruise Tix",
    category: "Entertainment",
    amount: 3000.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 13,
    user_id: 9,
    title: "Cruise Tix",
    category: "Entertainment",
    amount: 3000.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 13,
    user_id: 10,
    title: "Cruise Tix",
    category: "Entertainment",
    amount: 3000.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 14,
    user_id: 1,
    title: "Drinks/Extras",
    category: "Food/Beverage",
    amount: 200.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 14,
    user_id: 6,
    title: "Drinks/Extras",
    category: "Food/Beverage",
    amount: 200.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 14,
    user_id: 9,
    title: "Drinks/Extras",
    category: "Food/Beverage",
    amount: 200.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 14,
    user_id: 10,
    title: "Drinks/Extras",
    category: "Food/Beverage",
    amount: 200.0,
    date: "2019-09-10",
    complete: false
  },
  {
    expense_id: 15,
    user_id: 1,
    title: "Hotel",
    category: "Lodging",
    amount: 500.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 15,
    user_id: 2,
    title: "Hotel",
    category: "Lodging",
    amount: 500.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 15,
    user_id: 6,
    title: "Hotel",
    category: "Lodging",
    amount: 500.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 15,
    user_id: 7,
    title: "Hotel",
    category: "Lodging",
    amount: 500.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 16,
    user_id: 1,
    title: "Flights - Round Trip",
    category: "Transportation",
    amount: 2100.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 16,
    user_id: 2,
    title: "Flights - Round Trip",
    category: "Transportation",
    amount: 2100.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 16,
    user_id: 6,
    title: "Flights - Round Trip",
    category: "Transportation",
    amount: 2100.0,
    date: "2019-09-30",
    complete: false
  },
  {
    expense_id: 16,
    user_id: 7,
    title: "Flights - Round Trip",
    category: "Transportation",
    amount: 2100.0,
    date: "2019-09-30",
    complete: false
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("expense_users")
      //.truncate()
      .then(() => {
        // Inserts seed entries
        return knex("expense_users").insert(userExpenseData);
      })
  );
};
