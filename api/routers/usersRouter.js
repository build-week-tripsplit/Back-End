const router = require("express").Router();

const Users = require("../helpers/users-model");
const restricted = require("../../customMiddleware/restricted-middleware");

//GET USER BY DYNAMIC QUERY FILTER
//GET TO "/" WILL DISPLAY ALL USERS
//GET WITH A QUERY WILL DISPLAY USERS THAT MATCH THE QUERY
router.get("/", restricted, (req, res) => {
  if (!Object.keys(req.query).length) {
    Users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.status(500).json(err));
  } else {
    Users.find(req.query)
      .then(results => {
        if (!results.length) {
          res.status(400).json({ message: "No user(s) found" });
        } else if (results.length === 1) {
          res.status(200).json(results[0]);
        } else {
          res.status(200).json(results);
        }
      })
      .catch(err => res.status(500).json(err));
  }
});

router.delete("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  console.log({ id });
  try {
    const user = await Users.find({ id });
    console.log(user);
    if (user.length) {
      Users.remove({ id })
        .then(removed => res.status(204).end())
        .catch(err => res.status(500).json(err));
      res.status(204).end();
    } else {
      res.status(400).json({ message: "user with given id does not exist" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
