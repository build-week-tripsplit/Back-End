const router = require("express").Router();

const Expenses = require("../helpers/expenses-model");
const ExpenseUsers = require("../helpers/expense_users-model");
const Trips = require("../helpers/trips-model");
const restricted = require("../../customMiddleware/restricted-middleware");

//GET ALL EXPENSES
router.get("/", restricted, (req, res) => {
  Expenses.find()
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => res.status(500).json(err));
});

//GET EXPENSE BY ID
router.get("/:id", restricted, (req, res) => {
  Expenses.findById(req.params.id)
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => res.status(500).json(err));
});

// router.get("/all", (req, res) => {
//   Expenses.findUserExpenses()
//     .then(expenses => {
//       res.status(200).json(expenses);
//     })
//     .catch(err => res.status(500).json(err));
// });

//GET USER EXPENSES
router.get("/user/:id", restricted, async (req, res) => {
  try {
    const userExpenses = await ExpenseUsers.findUserExpenses(req.params.id);

    if (userExpenses.length) {
      const expenseIds = [];

      userExpenses.forEach(expense => {
        expenseIds.push(expense.expense_id);
      });

      var tripIds = [];

      await expenseIds.forEach(async (id, index, array) => {
        const response = await Expenses.findById(id);
        tripIds.push(response.trip_id);
        if (index === array.length - 1) {
          const result = userExpenses.map((expense, index) => {
            return { ...expense, trip_id: tripIds[index] };
          });
          res.status(200).json(result);
        }
      });
    } else {
      res
        .status(404)
        .json({ message: "No expenses found for provided user id" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST EXPENSE
router.post("/", restricted, async (req, res) => {
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

//UPDATE EXPENSE
router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (changes.id) {
    res.status(500).json({ message: "id cannot be changed" });
  } else {
    try {
      const expense = await Expenses.findById(id);

      if (expense) {
        const updatedExpense = await Expenses.update(changes, id);
        res.status(200).json(updatedExpense);
      } else {
        res
          .status(404)
          .json({ message: "Could not find expense with given ID" });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
});

//DELETE EXPENSE
router.delete("/:id", restricted, async (req, res) => {
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
