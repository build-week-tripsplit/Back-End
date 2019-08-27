const router = require("express").Router();

const Trips = require("../helpers/trips-model");
const restricted = require("../../customMiddleware/restricted-middleware");

router.get("/", (req, res) => {
  Trips.find()
    .then(trips => {
      res.json(trips);
    })
    .catch(err => res.send(err));
});

router.get("/:id", (req, res) => {
  Trips.findById(req.params.id)
    .then(trip => {
      res.json(trip);
    })
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  const trip = req.body;

  if (!trip.title || !trip.user_id) {
    res.status(500).json({
      message: "Must include trip title, user_id, and complete boolean value"
    });
  }

  Trips.add(trip)
    .then(saved => {
      res.json(saved);
    })
    .catch(err => res.send(err));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

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
});

router.delete("/:id", async (req, res) => {
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
