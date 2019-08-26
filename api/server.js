const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("combined"));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (_req, res) => {
  res.send("Server is up and running");
});

module.exports = server;
