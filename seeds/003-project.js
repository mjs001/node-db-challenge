exports.seed = function (knex) {
  return knex("project").insert([
    {
      project_id: 1,
      project_name: "project get chairs and desks",
      project_description: "need to get chairs and desks",
      completed: false,
    },
    {
      project_id: 2,
      project_name: "project get mat",
      project_description: "need to get a mat",
      completed: false,
    },
  ]);
};
