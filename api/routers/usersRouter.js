const router = require("express").Router();

const Users = require("../helpers/users-model");
const restricted = require("../../customMiddleware/restricted-middleware");
const validator = require("../../customMiddleware/validator");

//GET USER BY DYNAMIC QUERY FILTER
//GET TO "/" WILL DISPLAY ALL USERS
//GET WITH A QUERY WILL DISPLAY USERS THAT MATCH THE QUERY
// router.get("/", restricted, (req, res) => {
//   if (!Object.keys(req.query).length) {
//     Users.find()
//       .then(users => res.status(200).json(users))
//       .catch(err => res.status(500).json(err));
//   } else {
//     Users.find(req.query)
//       .then(results => {
//         if (!results.length) {
//           res.status(400).json({ message: "No user(s) found" });
//         } else if (results.length === 1) {
//           res.status(200).json(results[0]);
//         } else {
//           res.status(200).json(results);
//         }
//       })
//       .catch(err => res.status(500).json(err));
//   }
// });

//GET ALL USERS
router.get("/", restricted, async (req, res) => {
  try {
    let users = await Users.find();
    users.forEach(user => delete user.password);
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.toString(), message: "something went wrong" });
  }
});

//GET USER BY ID
router.get("/:id", restricted, validator.validateUserId, (req, res) => {
  const user = req.user;
  res.status(200).json(user);
});

//DELETE USER BY ID
router.delete(
  "/:id",
  restricted,
  validator.validateUserId,
  validator.validateWithPassword,
  validator.verifyUserByToken,
  async (req, res) => {
    const id = req.params.id;
    try {
      Users.remove({ id })
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json(err));
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
