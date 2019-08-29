exports.up = function(knex) {
  return knex.schema.createTable("expense_users", tbl => {
    tbl.increments();

    tbl
      .integer("expense_id")
      .notNullable()
      .references("id")
      .inTable("expenses")
      .onUpdate("cascade")
      .onDelete("cascade");

    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");

    tbl.float("amount");

    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("expense_users");
};
