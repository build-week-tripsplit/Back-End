const router = require("express").Router();

const Expenses = require("../helpers/expenses-model");
const restricted = require("../../customMiddleware/restricted-middleware");

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

router.get("/user/:id", (req, res) => {
  Expenses.findUserExpenses(req.params.user_id)
    .then(expenses => {
      res.json(expenses);
    })
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  const expense = req.body;

  if (!expense.title || !expense.user_id || !expense.trip_id) {
    res.status(500).json({
      message: "Must include expense title, user_id, and trip_id"
    });
  }

  Expenses.add(expense)
    .then(saved => {
      res.json(saved);
    })
    .catch(err => res.send(err));
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
