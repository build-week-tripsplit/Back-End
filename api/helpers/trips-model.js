const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserTrips,
  remove,
  update
};

function find() {
  return db("trips").select("*");
}

function findBy(filter) {
  return db("trips").where(filter);
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function findUserTrips(user_id) {
  return db("trips").where({ user_id });
}

// async function add(trip) {
//   const [id] = await db("trips").insert(trip);

//   return findById(id);
// }

async function add(trip) {
  const [newTrip] = await db("trips")
    .insert(trip)
    .returning("*");

  return newTrip;
}

async function update(changes, id) {
  const [updatedTrip] = await db("trips")
    .where({ id })
    .update(changes)
    .returning("*");

  return updatedTrip;
}

function remove(id) {
  return db("trips")
    .where({ id })
    .del()
    .then(trip => {
      if (trip) {
        return trip;
      } else {
        return null;
      }
    });
}
