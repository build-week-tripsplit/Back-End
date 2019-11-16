const router = require("express").Router();

const Users = require("../helpers/users-model");
const restricted = require("../../customMiddleware/restricted-middleware");
const validator = require("../../customMiddleware/validator");

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
  delete user.password;
  res.status(200).json(user);
});

router.get(
  "/username/:username",
  restricted,
  validator.validateUsername,
  (req, res) => {
    const user = req.user;
    delete user.password;
    res.status(200).json(user);
  }
);

//UPDATE USER BY ID
router.put(
  "/:id",
  restricted,
  validator.validateUserId,
  validator.verifyUserByToken,
  async (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    if (changes.id) {
      res.status(400).json({ message: "user id cannot be changed" });
    } else {
      try {
        const updatedUser = await Users.update(changes, id);
        delete updatedUser.password;
        res.status(200).json(updatedUser);
      } catch (err) {
        res
          .status(500)
          .json({ error: err.toString(), message: "Something went wrong" });
      }
    }
  }
);

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
