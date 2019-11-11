const Users = require("../api/helpers/users-model");

module.exports = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await Users.find({ id }).first();

    if (user) {
      next();
    } else {
      res.status(400).json({ error: "user with that id does not exist" });
    }
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};
