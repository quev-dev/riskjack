import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const app = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
  },
});

import store from "./app/.store.js";
import {
  increment,
  selectExample,
} from "./app/redux-reducers/example.reducer.js";

// * LISTEN TO EVENTS
// User connected
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("test_redux", (data) => {
    console.log(data);
  });
});

// 'Sockets' component example

server.listen(3001, () => {
  console.log("--- SERVER IS RUNNING");
});
