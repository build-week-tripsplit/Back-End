const router = require("express").Router();

const Users = require("../helpers/users-model");
const restricted = require("../../customMiddleware/restricted-middleware");

//GET ALL USERS
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

//GET USER BY ID
router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.status(500).json(err));
});

//GET USER BY USERNAME
router.get("/getby/:username", restricted, (req, res) => {
  console.log(req.params.username);
  Users.findByUsername(req.params.username)
    .then(user => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
