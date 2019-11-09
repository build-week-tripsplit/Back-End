const userTripData = [
  {
    trip_id: 1,
    user_id: 1,
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing our local branch of the company.",
    location: "Paris, France",
    start_date: "2019-07-15",
    end_date: "2019-07-20",
    complete: true
  },
  {
    trip_id: 1,
    user_id: 2,
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing our local branch of the company.",
    location: "Paris, France",
    start_date: "2019-07-15",
    end_date: "2019-07-20",
    complete: true
  },
  {
    trip_id: 2,
    user_id: 3,
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: "2019-07-20",
    end_date: "2019-07-30",
    complete: true
  },
  {
    trip_id: 2,
    user_id: 4,
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: "2019-07-20",
    end_date: "2019-07-30",
    complete: true
  },
  {
    trip_id: 2,
    user_id: 5,
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: "2019-07-20",
    end_date: "2019-07-30",
    complete: true
  },
  {
    trip_id: 3,
    user_id: 1,
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: "2019-08-10",
    end_date: "2019-08-14",
    complete: true
  },
  {
    trip_id: 3,
    user_id: 6,
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: "2019-08-10",
    end_date: "2019-08-14",
    complete: true
  },
  {
    trip_id: 4,
    user_id: 7,
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: "2019-08-30",
    end_date: "2019-08-31",
    complete: true
  },
  {
    trip_id: 4,
    user_id: 8,
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: "2019-08-30",
    end_date: "2019-08-31",
    complete: true
  },
  {
    trip_id: 4,
    user_id: 10,
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: "2019-08-30",
    end_date: "2019-08-31",
    complete: true
  },
  {
    trip_id: 5,
    user_id: 1,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: "2019-09-10",
    end_date: "2019-09-15",
    complete: false
  },
  {
    trip_id: 5,
    user_id: 6,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: "2019-09-10",
    end_date: "2019-09-15",
    complete: false
  },
  {
    trip_id: 5,
    user_id: 9,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: "2019-09-10",
    end_date: "2019-09-15",
    complete: false
  },
  {
    trip_id: 5,
    user_id: 10,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: "2019-09-10",
    end_date: "2019-09-15",
    complete: false
  },
  {
    trip_id: 6,
    user_id: 1,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: "2019-09-30",
    end_date: "2019-10-12",
    complete: false
  },
  {
    trip_id: 6,
    user_id: 2,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: "2019-09-30",
    end_date: "2019-10-12",
    complete: false
  },
  {
    trip_id: 6,
    user_id: 6,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: "2019-09-30",
    end_date: "2019-10-12",
    complete: false
  },
  {
    trip_id: 6,
    user_id: 7,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: "2019-09-30",
    end_date: "2019-10-12",
    complete: false
  }
];

exports.seed = function(knex) {
  return knex("trip_users").then(() => {
    return knex("trip_users").insert(userTripData);
  });
};
