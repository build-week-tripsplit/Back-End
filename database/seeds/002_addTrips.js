const tripData = [
  {
    title: "Paris Business Trip",
    description:
      "Going to Paris for business meetings and week-long conferences. Representing my local branch of the company.",
    location: "Paris, France",
    start_date: "2019-07-15",
    end_date: "2019-07-20",
    complete: true,
    created_by_user_id: 1
  },
  {
    title: "Bali Vaca!",
    description:
      "Relaxing with friends and checking out from responsibilities.",
    location: "Bali, Indonesia",
    start_date: "2019-07-20",
    end_date: "2019-07-30",
    complete: true,
    created_by_user_id: 3
  },
  {
    title: "Family Adventure to DisneyLand",
    description: "Loading everyone up for some family fun with Disney!",
    location: "Orlando, Florida",
    start_date: "2019-08-10",
    end_date: "2019-08-14",
    complete: true,
    created_by_user_id: 1
  },
  {
    title: "Girl's Night Out",
    description: "Esketit!",
    location: "Radius Night Club",
    start_date: "2019-08-30",
    end_date: "2019-08-31",
    complete: true,
    created_by_user_id: 7
  },
  {
    title: "Carribean Cruise",
    description: "Sun bathing, ocean, entertainment, and booze :)",
    location: "Royal Cruiseline",
    start_date: "2019-09-10",
    end_date: "2019-09-15",
    complete: false,
    created_by_user_id: 1
  },
  {
    title: "Konnichiwa!",
    description: "Heading to Japan! Couple's trip.",
    location: "Tokyo, Kyoto, Osaka",
    start_date: "2019-09-30",
    end_date: "2019-10-12",
    complete: false,
    created_by_user_id: 1
  }
];

exports.seed = function(knex, Promise) {
  return knex("trips").then(() => {
    return knex("trips").insert(tripData);
  });
};
