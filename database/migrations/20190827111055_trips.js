exports.up = function(knex) {
  return knex.schema.createTable("trips", tbl => {
    tbl.increments();

    tbl.string("title").notNullable();

    tbl.string("description");

    tbl.string("location");

    tbl.integer("start_date");

    tbl.integer("end_date");

    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
