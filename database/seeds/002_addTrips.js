const tripData = [
  {
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
    location: "Paris, France",
    start_date: 1546387932,
    end_date: 1546733532,
    complete: true
  },
  {
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: 1551485532,
    end_date: 1552090332,
    complete: true
  },
  {
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: 1560039132,
    end_date: 1560557532,
    complete: true
  },
  {
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: 1566000732,
    end_date: 1566087132,
    complete: true
  },
  {
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: 1575331932,
    end_date: 1576368732,
    complete: false
  },
  {
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
    knex("trips")
      //.truncate()
      .then(() => {
        // Inserts seed entries
        return knex("trips").insert(tripData);
      })
  );
};
