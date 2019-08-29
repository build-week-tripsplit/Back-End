exports.up = function(knex) {
  return knex.schema.createTable("trip_users", tbl => {
    tbl.increments();

    tbl
      .integer("trip_id")
      .notNullable()
      .references("id")
      .inTable("trips")
      .onUpdate("cascade")
      .onDelete("cascade");

    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");

    tbl.string("title");

    tbl.string("description");

    tbl.string("location");

    tbl.integer("start_date");

    tbl.integer("end_date");

    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trip_users");
};
