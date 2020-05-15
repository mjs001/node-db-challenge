const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config.js");
const Brouter = require("./data/business-router.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/business", Brouter);
module.exports = server;
