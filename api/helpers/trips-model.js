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

// async function add(trip) {
//   const [id] = await db("trips").insert(trip);

//   return findById(id);
// }

async function add(trip) {
  const newTrip = await db("trips")
    .insert(trip)
    .returning("*");

  return newTrip;
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("trips")
    .where({ id })
    .update(changes)
    .then(trip => {
      return trip;
    });
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
