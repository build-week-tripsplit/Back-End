exports.up = function(knex) {
  return knex.schema.createTable("expenses", expenses => {
    expenses.serial("id").primary();

    expenses.string("title").notNullable();

    expenses.string("category");

    expenses.float("amount");

    expenses.integer("date");

    expenses
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");

    expenses
      .integer("trip_id")
      .notNullable()
      .references("id")
      .inTable("trips")
      .onUpdate("cascade")
      .onDelete("cascade");

    expenses.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("expenses");
};
