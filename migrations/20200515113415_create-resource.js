exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.text("project_name", 128).notNullable();
      tbl.text("project_description", 256).notNullable();
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.text("resource_name", 128).notNullable();
      tbl.text("resource_description", 256);
    })
    .createTable("task", (tbl) => {
      tbl.increments();
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("task_description", 256).notNullable();
      tbl.text("task_notes", 256);
      tbl.boolean("completed").notNullable().defaultTo(false);
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

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task");
};
