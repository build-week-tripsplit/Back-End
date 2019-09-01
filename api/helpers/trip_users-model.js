const db = require("../../data/dbConfig");

module.exports = {
  add,
  findUserTrips,
  findByTripId,
  update
};

function findUserTrips(user_id) {
  return db("trip_users").where({ user_id });
}

function findByTripId(trip_id) {
  return db("trip_users").where({ trip_id });
}

async function add(
  trip_id,
  user_id,
  title,
  description,
  location,
  start_date,
  end_date
) {
  const [newTrip] = await db("trip_users")
    .insert({
      trip_id,
      user_id,
      title,
      description,
      location,
      start_date,
      end_date
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
