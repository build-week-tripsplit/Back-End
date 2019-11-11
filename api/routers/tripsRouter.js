const router = require("express").Router();

const Trips = require("../helpers/trips-model");
const TripUsers = require("../helpers/trip_users-model");
const Users = require("../helpers/users-model");
const restricted = require("../../customMiddleware/restricted-middleware");
const validateId = require("../../customMiddleware/validateId");

//GET ALL TRIPS
router.get("/", restricted, (req, res) => {
  Trips.find()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.status(500).json(err));
});

//GET TRIP BY ID
router.get("/:id", restricted, validateId.validateTripId, async (req, res) => {
  try {
    const trip = req.trip;

    const tripObjects = await TripUsers.findByTripId(trip.id);

    const tripUserIds = tripObjects.map(item => item.user_id);

    const result = {
      ...trip,
      users: tripUserIds
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
  validateId.validateUserId,
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
router.post("/", restricted, async (req, res) => {
  const trip = req.body.trip;
  const title = trip.title;
  const description = trip.description;
  const location = trip.location;
  const start_date = trip.start_date;
  const end_date = trip.end_date;
  const usersArray = req.body.users;

  console.log("REQUEST: ", req.body);
  console.log("trip: ", trip);

  if (!trip.title || !usersArray) {
    res.status(500).json({
      message: "Must include trip title, and users array"
    });
  }

  Trips.add(trip)
    .then(saved => {
      console.log(" got here");
      //change to saved.id for postgres-------------------------------->
      const trip_id = saved.id;

      console.log("added trip");
      usersArray.forEach(user => {
        TripUsers.add(
          trip_id,
          user,
          title,
          description,
          location,
          start_date,
          end_date
        )
          .then(saved => {
            console.log(saved);
          })
          .catch(err =>
            res.status(500).json({
              err,
              message: "error adding individual trips to users"
            })
          );
      });
      res.status(201).json(saved);
    })
    .catch(err => res.status(500).json({ err }));
});

//POST USER TRIP
// router.post("/user", restricted, (req, res) => {
//   const trip = req.body;

//   TripUsers.add(trip)
//     .then(saved => {
//       res.json(saved);
//     })
//     .catch(err => res.send(err));
// });

//UPDATE TRIP BY ID
router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (changes.id) {
    res.status(500).json({ message: "id cannot be changed" });
  } else {
    try {
      const trip = await Trips.findById(id);

      if (trip) {
        const updatedTrip = await Trips.update(changes, id);
        res.json(updatedTrip);
      } else {
        res.status(404).json({ message: "Could not find trip with given ID" });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
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
router.delete("/:id", restricted, async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Trips.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find trip with given ID" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
