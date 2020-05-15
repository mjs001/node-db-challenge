exports.up = function (knex) {
  return knex.schema.createTable("project", (tbl) => {
    tbl.increments();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resourceAndProject")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.text("project_name", 128).notNullable();
    tbl.text("project_description", 256);
    tbl.boolean("completed", false).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project");
};
