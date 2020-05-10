const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");
const tripsRouter = require("./routers/tripsRouter");
const expensesRouter = require("./routers/expensesRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("combined"));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/trips", tripsRouter);
server.use("/api/expenses", expensesRouter);

server.get("/", (_req, res) => {
  res.send(
    '<h1>Welcome to the TripSplit API!</h1><h3>For documentation <a href="https://github.com/build-week-tripsplit/Back-End">click here</a>.</h3><p>This API was made by <a href="https://github.com/kmcknight1">Katie McKnight</a> with ❤️</p>'
  );
});

module.exports = server;
