const router = require("express").Router();

const Trips = require("../helpers/trips-model");
const TripUsers = require("../helpers/trip_users-model");
const restricted = require("../../customMiddleware/restricted-middleware");
const validator = require("../../customMiddleware/validator");

//GET ALL TRIPS
router.get("/", restricted, (req, res) => {
  Trips.find()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.status(500).json(err));
});

//GET TRIP BY ID
router.get("/:id", restricted, validator.validateTripId, async (req, res) => {
  try {
    const trip = req.trip;

    const usersArray = await TripUsers.findUsersByTripId(trip.id);

    const result = {
      ...trip,
      users: usersArray
    };

    res.status(202).json(result);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
});

//GET TRIPS BY USER ID
router.get(
  "/user/:id",
  restricted,
  validator.validateUserId,
  async (req, res) => {
    try {
      const userTrips = await TripUsers.findUserTrips(req.params.id);

      if (userTrips.length) {
        res.status(202).json(userTrips);
      } else {
        res.status(404).json({ message: "No trips found for this user" });
      }
    } catch (err) {
      res.status(500).json({ error: "something went wrong" });
    }
  }
);

//POST TRIP
router.post("/", restricted, (req, res) => {
  const trip = req.body;

  if (!trip.title || !trip.created_by_user_id) {
    res.status(500).json({
      message: "Must include trip title and created_by_user_id"
    });
  }

  Trips.add(trip)
    .then(saved_trip => {
      const trip_id = saved_trip.id;

      TripUsers.add(trip_id, trip.created_by_user_id)
        .then(saved_trip_user => {
          res.status(201).json(saved_trip);
        })
        .catch(err =>
          res.status(500).json({
            error: err.toString(),
            mesage: "error adding individual trips to users"
          })
        );
    })
    .catch(err => res.status(500).json({ error: err.toString() }));
});

//POST USER TRIP
router.post("/user", restricted, (req, res) => {
  const trip = req.body;

  TripUsers.add(trip)
    .then(saved => {
      res.json(saved);
    })
    .catch(err => res.send(err));
});

//UPDATE TRIP BY ID
router.put("/:id", restricted, validator.validateTripId, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (changes.id) {
    res.status(400).json({ message: "trip id cannot be changed" });
  } else {
    try {
      const updatedTrip = await Trips.update(changes, id);
      res.status(200).json(updatedTrip);
    } catch (err) {
      res
        .status(500)
        .json({ error: err.toString(), message: "Something went wrong" });
    }
  }
});

//UPDATE USER TRIP
router.put("/user/:userid/trip/:tripid", restricted, async (req, res) => {
  const user_id = req.params.userid;
  const trip_id = req.params.tripid;
  const changes = req.body;

  try {
    const trip = await TripUsers.findByTripId(trip_id);

    if (trip) {
      const updatedTrip = await TripUsers.update(changes, trip_id, user_id);
      res.status(200).json(updatedTrip);
    } else {
      res.status(404).json({ message: "Could not find trip with given ID" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//DELETE TRIP
router.delete(
  "/:id",
  restricted,
  validator.validateTripId,
  validator.verifyUserByToken,
  async (req, res) => {
    try {
      Trips.remove(req.trip.id);

      res.status(204).end();
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

module.exports = router;
