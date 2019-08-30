const db = require("../../data/dbConfig");

module.exports = {
  add,
  findUserTrips,
  findByTripId
};

// function find() {
//   return db("trip_users").select("*");
// }

// function findBy(filter) {
//   return db("trip_users").where(filter);
// }

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

// async function update(changes, id) {
//   const [updatedtrip] = await db("trip_users")
//     .where({ id })
//     .update(changes)
//     .returning("*");
//   return updatedtrip;
// }

// function remove(id) {
//   return db("trip_users")
//     .where({ id })
//     .del()
//     .then(trip => {
//       if (trip) {
//         return trip;
//       } else {
//         return null;
//       }
//     });
// }
