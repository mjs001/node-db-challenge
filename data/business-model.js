const knex = require("knex");
const db = knex(require("../knexfile").development);

module.exports = {
  getResources,
  addResources,
  addProjects,
  getProjects,
  addTasks,
  getTasks,
};

function getResources() {
  return db("resource");
}

function addResources(resource) {
  return db("resource").insert(resource);
}

function addProjects(project) {
  return db("project").insert(project);
}

function getProjects() {
  return db("project");
}

function addTasks(task) {
  return db("task").insert(task);
}

function getTasks() {
  return db("task");
}
