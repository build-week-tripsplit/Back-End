const faker = require("faker");

const hardFakeTrips = [
    {
      title: "Paris Business Trip",
      description:
        "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
      location: "Paris, France",
      start_date: 1560643200,
      end_date: 1561248000,
      complete: true
    },
    {
      title: "Bali Vaca!",
      description: "Relaxing with bae and checking out from responsibilities.",
      location: "Bali, Indonesia",
      start_date: 1569542400,
      end_date: 1569974400,
      complete: false
    },
    {
      title: "Family Adventure to DisneyLand",
      description: "Loading everyone up for some family fun with Disney!",
      location: "Orlando, Florida",
      start_date: 1570665600,
      end_date: 1570924800,
      complete: false
    }
  ];

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
