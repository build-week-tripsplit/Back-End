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

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

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
