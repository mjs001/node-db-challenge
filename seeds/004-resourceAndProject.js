exports.seed = function (knex) {
  return knex("resourceAndProject").insert([
    { resource_id: 1, project_id: 1 },
    { resource_id: 2, project_id: 1 },
    { resource_id: 3, project_id: 2 },
  ]);
};
