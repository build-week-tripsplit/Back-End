//posting an expense

//request

request = {
  expense: {
    title: "Hotel Cost",
    category: "Lodging",
    amount: 780,
    date: 15809930583,
    trip_id: 2
  },
  users: [2, 5, 6, 10]
};

//post request

router.post("/", async (req, res) => {
  const expense = req.body.expense;
  const amount = expense.amount;
  const usersArray = req.body.users;

  const fixedDecimalAmount = Math.round(amount * 100) / 100;
  const perUserAmount = fixedDecimalAmount / usersArray.length;

  if (!expense.title || !usersArray || !expense.trip_id) {
    res.status(500).json({
      message: "Must include expense title, users array, and trip_id"
    });
  }

  Expenses.add(expense)
    .then(saved => {
      usersArray.forEach(item => {
        ExpenseUsers.add(usersArray[index], perUserAmount)
          .then(saved => {
            console.log(saved);
          })
          .catch(err => res.send(err));
      });
      res.send(saved);
    })
    .catch(err => res.send(err));
});

//have request send an expense object, with all properties & values of the expense
//have the request send a users property, with an array of user ids for the expense
//
