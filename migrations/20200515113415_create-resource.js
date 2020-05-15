exports.up = function (knex) {
  return knex.schema.createTable("resource", (tbl) => {
    tbl.increments();
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resourceAndProject")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.text("resource_name", 128).notNullable();
    tbl.text("resource_description", 256);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resource");
};
