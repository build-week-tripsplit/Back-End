exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.serial("id").primary();

    tbl
      .string("username", 255)
      .notNullable()
      .unique();

    tbl
      .string("email", 255)
      .notNullable()
      .unique();

    tbl.string("password", 255).notNullable();

    tbl.string("firstName", 255);

    tbl.string("lastName", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
