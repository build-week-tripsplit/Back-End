const userTripData = [
  {
    trip_id: 1,
    user_id: 1,
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing our local branch of the company.",
    location: "Paris, France",
    start_date: 1546387932,
    end_date: 1546733532,
    complete: true
  },
  {
    trip_id: 1,
    user_id: 2,
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing our local branch of the company.",
    location: "Paris, France",
    start_date: 1546387932,
    end_date: 1546733532,
    complete: true
  },
  {
    trip_id: 2,
    user_id: 3,
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: 1551485532,
    end_date: 1552090332,
    complete: true
  },
  {
    trip_id: 2,
    user_id: 4,
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: 1551485532,
    end_date: 1552090332,
    complete: true
  },
  {
    trip_id: 2,
    user_id: 5,
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: 1551485532,
    end_date: 1552090332,
    complete: true
  },
  {
    trip_id: 3,
    user_id: 1,
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: 1560039132,
    end_date: 1560557532,
    complete: true
  },
  {
    trip_id: 3,
    user_id: 6,
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: 1560039132,
    end_date: 1560557532,
    complete: true
  },
  {
    trip_id: 4,
    user_id: 7,
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: 1566000732,
    end_date: 1566087132,
    complete: true
  },
  {
    trip_id: 4,
    user_id: 8,
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: 1566000732,
    end_date: 1566087132,
    complete: true
  },
  {
    trip_id: 4,
    user_id: 10,
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: 1566000732,
    end_date: 1566087132,
    complete: true
  },
  {
    trip_id: 5,
    user_id: 1,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: 1575331932,
    end_date: 1576368732,
    complete: false
  },
  {
    trip_id: 5,
    user_id: 6,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: 1575331932,
    end_date: 1576368732,
    complete: false
  },
  {
    trip_id: 5,
    user_id: 9,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: 1575331932,
    end_date: 1576368732,
    complete: false
  },
  {
    trip_id: 5,
    user_id: 10,
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: 1575331932,
    end_date: 1576368732,
    complete: false
  },
  {
    trip_id: 6,
    user_id: 1,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: 1581120732,
    end_date: 1581466332,
    complete: false
  },
  {
    trip_id: 6,
    user_id: 2,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: 1581120732,
    end_date: 1581466332,
    complete: false
  },
  {
    trip_id: 6,
    user_id: 6,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: 1581120732,
    end_date: 1581466332,
    complete: false
  },
  {
    trip_id: 6,
    user_id: 7,
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: 1581120732,
    end_date: 1581466332,
    complete: false
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("trip_users")
      //.truncate()
      .then(() => {
        // Inserts seed entries
        return knex("trip_users").insert(userTripData);
      })
  );
};
