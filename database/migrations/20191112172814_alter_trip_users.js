exports.up = function(knex) {
  return knex.schema.table("trip_users", tbl => {
    tbl.dropColumns(
      "title",
      "description",
      "location",
      "start_date",
      "end_date",
      "complete"
    );
  });
};

exports.down = function(knex) {
  return knex.schema.table("trip_users", tbl => {
    tbl.string("title");

    tbl.string("description");

    tbl.string("location");

    tbl.date("start_date");

    tbl.date("end_date");

    tbl.boolean("complete").defaultTo(false);
  });
};
