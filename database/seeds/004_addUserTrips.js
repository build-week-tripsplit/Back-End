const userTripData = [
  {
    trip_id: 1,
    user_id: 1
  },
  {
    trip_id: 1,
    user_id: 2
  },
  {
    trip_id: 2,
    user_id: 3
  },
  {
    trip_id: 2,
    user_id: 4
  },
  {
    trip_id: 2,
    user_id: 5
  },
  {
    trip_id: 3,
    user_id: 1
  },
  {
    trip_id: 3,
    user_id: 6
  },
  {
    trip_id: 4,
    user_id: 7
  },
  {
    trip_id: 4,
    user_id: 8
  },
  {
    trip_id: 4,
    user_id: 10
  },
  {
    trip_id: 5,
    user_id: 1
  },
  {
    trip_id: 5,
    user_id: 6
  },
  {
    trip_id: 5,
    user_id: 9
  },
  {
    trip_id: 5,
    user_id: 10
  },
  {
    trip_id: 6,
    user_id: 1
  },
  {
    trip_id: 6,
    user_id: 2
  },
  {
    trip_id: 6,
    user_id: 6
  },
  {
    trip_id: 6,
    user_id: 7
  }
];

exports.seed = function(knex) {
  return knex("trip_users").then(() => {
    return knex("trip_users").insert(userTripData);
  });
};
