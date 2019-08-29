const router = require("express").Router();

const Expenses = require("../helpers/expenses-model");
const ExpenseUsers = require("../helpers/expense_users-model");
const Trips = require("../helpers/trips-model");
// const restricted = require("../../customMiddleware/restricted-middleware");

router.get("/", (req, res) => {
  Expenses.find()
    .then(expenses => {
      res.json(expenses);
    })
    .catch(err => res.send(err));
});

router.get("/:id", (req, res) => {
  Expenses.findById(req.params.id)
    .then(expense => {
      res.json(expense);
    })
    .catch(err => res.send(err));
});

// router.get("/all", (req, res) => {
//   Expenses.findUserExpenses()
//     .then(expenses => {
//       res.status(200).json(expenses);
//     })
//     .catch(err => res.status(500).json(err));
// });

router.get("/user/:id", async (req, res) => {
  ExpenseUsers.findUserExpenses(req.params.id)
    .then(async expenses => {
      const expenseIds = [];

      expenses.forEach(expense => {
        expenseIds.push(expense.expense_id);
      });

      var tripIds = [];

      try {
        await expenseIds.forEach(async (id, index, array) => {
          const response = await Expenses.findById(id);
          tripIds.push(response.trip_id);
          if (index === array.length - 1) {
            const result = expenses.map((expense, index) => {
              return { ...expense, trip_id: tripIds[index] };
            });
            res.status(200).json(result);
          }
        });
      } catch {
        console.error(err);
      }
    })
    .catch(err => res.status(500).json(err));
});

//OG POST for expenses

// router.post("/", (req, res) => {
//   const expense = req.body;

//   if (!expense.title || !expense.user_id || !expense.trip_id) {
//     res.status(500).json({
//       message: "Must include expense title, user_id, and trip_id"
//     });
//   }

//   Expenses.add(expense)
//     .then(saved => {
//       res.json(saved);
//     })
//     .catch(err => res.send(err));
// });

//NEW POST to handle new expense_users

router.post("/", async (req, res) => {
  const expense = req.body.expense;
  const amount = expense.amount;
  const title = expense.title;
  const category = expense.category;
  const date = expense.date;
  const usersArray = req.body.users;

  const perUserAmount = amount / usersArray.length;
  const fixedDecimalAmount = Math.round(perUserAmount * 100) / 100;

  if (!expense.title || !usersArray || !expense.trip_id) {
    res.status(500).json({
      message: "Must include expense title, users array, and trip_id"
    });
  }

  Expenses.add(expense)
    .then(saved => {
      //change to saved.id for postgres-------------------------------->
      const expense_id = saved.id;

      usersArray.forEach(user => {
        ExpenseUsers.add(
          expense_id,
          user,
          fixedDecimalAmount,
          title,
          category,
          date
        )
          .then(saved => {
            console.log(saved);
          })
          .catch(err =>
            res.status(500).json({
              err,
              message: "error adding individual expenses to users"
            })
          );
      });
      res.status(201).json(saved);
    })
    .catch(err => res.status(500).json({ err, message: "error out here" }));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const expense = await Expenses.findById(id);

    if (expense) {
      const updatedExpense = await Expenses.update(changes, id);
      res.json(updatedExpense);
    } else {
      res.status(404).json({ message: "Could not find expense with given ID" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Expenses.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find expense with given ID" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
