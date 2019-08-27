exports.up = function(knex) {
  return knex.schema.createTable("expenses", expenses => {
    expenses.increments();

    expenses.string("title").notNullable();

    expenses.string("category");

    expenses.float("amount");

    expenses.timestamp("date");

    expenses
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    expenses
      .integer("trip_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    expenses.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("expenses");
};
