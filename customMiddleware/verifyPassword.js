const Users = require("../api/helpers/users-model");
const bcrypt = require("bcryptjs");

module.exports = async (req, res, next) => {
  const password = req.body.password;
  const id = req.params.id;

  if (!password) {
    res.status(400).json({ error: "Please provide a password" });
  }

  try {
    const user = await Users.find({ id }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      req.user = user;
      next();
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};
