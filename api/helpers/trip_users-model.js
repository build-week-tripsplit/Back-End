const db = require("../../data/dbConfig");

module.exports = {
  add,
  findUserTrips,
  findByTripId,
  update,
  findUsersByTripId
};

function findUserTrips(user_id) {
  return db("trip_users").where({ user_id });
}

function findByTripId(trip_id) {
  return db("trip_users").where({ trip_id });
}

function findUsersByTripId(trip_id) {
  return db("trip_users")
    .join("users", "users.id", "trip_users.user_id")
    .where("trip_users.trip_id", "=", trip_id)
    .select("username", "email");
}

async function add(trip_id, user_id) {
  const [newTrip] = await db("trip_users")
    .insert({
      trip_id,
      user_id
    })
    .returning("*");

  return newTrip;
}

async function update(changes, trip_id, user_id) {
  const [updatedTrip] = await db("trip_users")
    .where({ trip_id })
    .where({ user_id })
    .update(changes)
    .returning("*");

  return updatedTrip;
}
