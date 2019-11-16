require("dotenv").config();

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "secret";

const Users = require("../helpers/users-model");
const validator = require("../../customMiddleware/validator");

router.post("/register", (req, res) => {
  const user = req.body;

  if (!user.username || !user.password || !user.email) {
    res.status(500).json({
      message: "Registration requires a username, email, and password."
    });
  }

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ message: "something went wrong" });
    });
});

router.post("/login", validator.validateWithPassword, (req, res) => {
  const user = req.user;
  delete user.password;
  const token = genToken(user);
  res.status(200).json({
    token,
    ...user
  });
});

function genToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
