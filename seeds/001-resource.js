exports.seed = function (knex) {
  return knex("resource").insert([
    {
      resource_id: 1,
      resource_name: "office chair",
      resource_description: "a simple office chair",
    },
    {
      resource_id: 2,
      resource_name: "office desk",
      resource_description: "a simple office desk",
    },
    {
      resource_id: 3,
      resource_name: "office mat",
      resource_description: "a simple office mat",
    },
  ]);
};
