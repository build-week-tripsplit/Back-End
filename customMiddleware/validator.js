const bcrypt = require("bcryptjs");
const Users = require("../api/helpers/users-model");
const Trips = require("../api/helpers/trips-model");

module.exports = {
  validateUserId,
  validateUsername,
  validateWithPassword,
  verifyUserByToken,
  validateTripId
};

//================================= USER VALIDATION MIDDLEWARE =================================//
async function validateUserId(req, res, next) {
  const { id } = req.params;

  try {
    const user = await Users.findById(id);

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ message: "user with that id does not exist" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: err.toString(), message: "something went wrong" });
  }
}

async function validateUsername(req, res, next) {
  const { username } = req.params;

  try {
    const user = await Users.findByUsername(username);

    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(404)
        .json({ message: "user with that username does not exist" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: err.toString(), message: "something went wrong" });
  }
}

async function validateWithPassword(req, res, next) {
  const { username, password } = req.body;
  const { id } = req.params;

  if (!password) {
    res.status(400).json({ error: "Please provide a password" });
  }

  try {
    const user = id
      ? await Users.findById(id)
      : await Users.findByUsername(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: err.toString(), message: "something went wrong" });
  }
}

async function verifyUserByToken(req, res, next) {
  if (req.trip && req.trip.created_by_user_id == req.jwtToken.subject) {
    next();
  } else if (req.params.id && req.params.id == req.jwtToken.subject) {
    next();
  } else {
    res.status(401).json({ error: "user id and user token do not match" });
  }
}

//================================= TRIP VALIDATION MIDDLEWARE =================================//

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
    res
      .status(500)
      .json({ error: err.toString(), message: "something went wrong" });
  }
}
