exports.up = function(knex) {
  return knex.schema.createTable("expenses", expenses => {
    expenses.increments();

    expenses.string("title").notNullable();

    expenses.string("category");

    expenses.float("amount");

    expenses.integer("date");

    expenses
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .onUpdate("cascade");

    expenses
      .integer("trip_id")
      .notNullable()
      .references("id")
      .inTable("trips")
      .onDelete("cascade")
      .onUpdate("cascade");

    expenses.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("expenses");
};
