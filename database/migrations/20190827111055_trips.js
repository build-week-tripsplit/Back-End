exports.up = function(knex) {
  return knex.schema.createTable("trips", trips => {
    trips.increments();

    trips.string("title").notNullable();

    trips.string("description");

    trips.string("location");

    trips.timestamp("start_date");

    trips.timestamp("end_date");

    trips
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    trips
      .boolean("complete")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
