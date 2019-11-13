exports.up = function(knex) {
  return knex.schema.table("trips", tbl => {
    tbl
      .integer("created_by_user_id")
      .references("users.id")
      .onUpdate("cascade")
      .onDelete("cascade");
  });
};

exports.down = function(knex) {
  return knex.schema.table("trips", tbl => {
    tbl.dropColumn("created_by_user_id");
  });
};
