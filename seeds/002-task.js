exports.seed = function (knex) {
  return knex("task").insert([
    {
      task_id: 1,
      task_description: "got to get some chairs",
      task_notes: "na",
      completed: true,
      project_id: 1,
    },
    {
      task_id: 2,
      task_description: "got to get some desks",
      task_notes: "want some black desks",
      completed: false,
      project_id: 1,
    },
    {
      task_id: 3,
      task_description: "got to get a mat",
      task_notes: "would like a paisley one",
      completed: false,
      project_id: 2,
    },
  ]);
};
