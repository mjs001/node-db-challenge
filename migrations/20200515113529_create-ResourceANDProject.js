exports.up = function (knex) {
  return knex.schema.createTable("resourceAndProject", (tbl) => {
    tbl.increments();
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resource")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("project")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {};
