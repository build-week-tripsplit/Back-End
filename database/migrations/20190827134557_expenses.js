exports.up = function(knex) {
  return knex.schema.createTable("expenses", tbl => {
    tbl.increments();

    tbl.string("title").notNullable();

    tbl.string("category");

    tbl.float("amount");

    tbl.date("date");

    tbl
      .integer("trip_id")
      .notNullable()
      .references("id")
      .inTable("trips")
      .onUpdate("cascade")
      .onDelete("cascade");

    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("expenses");
};
