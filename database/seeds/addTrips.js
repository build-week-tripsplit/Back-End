const tripData = [
  {
    id: 1,
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
    location: "Paris, France",
    start_date: 1560643200,
    end_date: 1561248000,
    user_id: 1,
    complete: true
  },
  {
    id: 2,
    title: "Bali Vaca!",
    description: "Relaxing with bae and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: 1569542400,
    end_date: 1569974400,
    user_id: 1,
    complete: false
  },
  {
    id: 3,
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: 1570665600,
    end_date: 1570924800,
    user_id: 1,
    complete: false
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("trips")
      //.truncate()
      .then(() => {
        // Inserts seed entries
        return knex("trips").insert(tripData);
      })
  );
};
