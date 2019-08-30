const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("trips").select("*");
}

function findBy(filter) {
  return db("trips").where(filter);
}

//findById - need user ids array
//Trips.findById().then(trip => {
//  TripUsers.findByTripId( db.("trip_users").where({ trip_id })
//   grab user_ids from all responses, push to array, return array
//   with trip object return as users: [] )
//}).catch

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

// function findUserTrips(user_id) {
//   return db("trips").where({ user_id });
// }

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
