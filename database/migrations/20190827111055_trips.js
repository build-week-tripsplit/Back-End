exports.up = function(knex) {
  return knex.schema.createTable("trips", tbl => {
    tbl.serial("id").primary();

    tbl.string("title").notNullable();

    tbl.string("description");

    tbl.string("location");

    tbl.integer("start_date");

    tbl.integer("end_date");

    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");

    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
