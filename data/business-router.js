const express = require("express");

const business = require("./business-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  business
    .getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  business
    .getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "cant get resources" });
    });
});

router.get("/tasks", (req, res) => {
  business
    .getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "cant get tasks" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  business
    .addProjects(data)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "cant add project" });
    });
});

router.post("/tasks", (req, res) => {
  const data = req.body;
  business
    .addTasks(data)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "cant add task" });
    });
});

router.post("/resources", (req, res) => {
  const data = req.body;
  business
    .addResources(data)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "cant add resource" });
    });
});

module.exports = router;
