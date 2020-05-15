exports.up = function (knex) {
  return knex.schema.createTable("task", (tbl) => {
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
    tbl.boolean("completed", false).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task");
};
