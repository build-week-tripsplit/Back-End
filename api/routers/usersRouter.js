const router = require("express").Router();

const Users = require("../helpers/users-model");
const restricted = require("../../customMiddleware/restricted-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/getby/:username", restricted, (req, res) => {
  console.log(req.params.username);
  Users.findByUsername(req.params.username)
    .then(user => {
      console.log(user);
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
