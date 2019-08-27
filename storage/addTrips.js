// const faker = require("faker");

// const trip1 = {
//   id: 1,
//   title: "Trip to a Place!",
//   description: "I'm going on a trip and I'm gonna have some fun!",
//   location: "Placey, Place",
//   start_date: 1569542400,
//   end_date: 1569974400,
//   user_id: 1,
//   complete: false
// };

// const createFakeTrip = id => ({
//   id,
//   title: faker.lorem.words(),
//   description: faker.lorem.sentence(),
//   location: faker.address.country(),
//   start_date: 1569542400,
//   end_date: 1569974400,
//   user_id: id,
//   complete: id % 2 === 0 ? false : true
// });

// exports.seed = function(knex, Promise) {
//   return knex("trips")
//     .truncate()
//     .then(() => {
//       let fakeTrips = [];
//       const desiredFakeTrips = 101;

//       fakeTrips.push(trip1);

//       for (let i = 2; i < desiredFakeTrips; i++) {
//         fakeTrips.push(createFakeTrip(i));
//       }

//       return knex("trips").insert(fakeTrips);
//     });
// };
