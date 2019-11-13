const Users = require("../api/helpers/users-model");
const Trips = require("../api/helpers/trips-model");

module.exports = {
  validateUserId,
  validateTripId
};

async function validateUserId(req, res, next) {
  const id = req.params.id;

  try {
    const user = await Users.findById(id).first();

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(400).json({ error: "user with that id does not exist" });
    }
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
}

async function validateTripId(req, res, next) {
  const id = req.params.id;

  try {
    const trip = await Trips.findById(id);

    if (trip) {
      req.trip = trip;
      next();
    } else {
      res.status(400).json({ error: "trip with that id does not exist" });
    }
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
}
